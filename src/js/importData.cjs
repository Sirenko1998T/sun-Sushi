const fs = require('fs');
const path = require('path');
const admin = require('firebase-admin');


const serviceAccountPath = path.resolve(__dirname, '../firebase-service-account.json');
const serviceAccount = require(serviceAccountPath);


admin.initializeApp({
   credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();


const productsDirectory = path.resolve(__dirname, '../files/product');

async function importAllData() {
   console.log('Starting import of all data into Firestore...');

   let files;
   try {

      files = fs.readdirSync(productsDirectory);
   } catch (error) {
      console.error(`❌ Error reading directory ${productsDirectory}:`, error);
      return;
   }

   for (const file of files) {

      if (path.extname(file) === '.json') {
         const filePath = path.join(productsDirectory, file);
         let productsData;

         try {

            const fileContent = fs.readFileSync(filePath, 'utf8');
            productsData = JSON.parse(fileContent);
         } catch (parseError) {
            console.error(`❌ Error reading or parsing file ${file}:`, parseError);
            continue;
         }


         if (!Array.isArray(productsData)) {
            console.error(`❌ Expected an array in file ${file}. Skipping...`);
            continue;
         }


         const categoryName = path.basename(file, '.json');

         console.log(`🚀 Importing ${productsData.length} products from "${file}" into "products" collection...`);
         const batch = db.batch();

         for (const product of productsData) {

            const docRef = product.id
               ? db.collection('products').doc(product.id)
               : db.collection('products').doc();

            batch.set(docRef, {
               ...product,
               category: categoryName
            });
         }

         try {

            await batch.commit();
            console.log(`✅ Import from file "${file}" completed.`);
         } catch (commitError) {
            console.error(`❌ Error importing from file "${file}":`, commitError);
         }
      }
   }

   console.log('✅ All imports completed.');
}


importAllData();
