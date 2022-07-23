const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');



Database.then(async db => {



    // Insert datas in datatable

    /*  await saveOrphanage(db, {
        lat: "-5.8020",
        lng: "-35.1886",
        name: "lar dos meninos",
        about: "Presta assistência a crianças de 08 a 17 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "999929999",
        images:[
            "https://images.unsplash.com/photo-1655147237657-ffb6de9d9e86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",

            "https://images.unsplash.com/photo-1655147237657-ffb6de9d9e86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"

        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 6 até às 18",
        open_on_weekends: "0"
        
    })  */



    // Query datas in datatable

    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)



    // Query a single orphanage by id

    /* const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "4"')
    console.log(orphanage) */



    // data remove from TABLE

    /* console.log(await db.run('DELETE FROM orphanages WHERE id = "4" '))
    console.log(await db.run('DELETE FROM orphanages WHERE id = "5" '))
    console.log(await db.run('DELETE FROM orphanages WHERE id = "6" ')) */
})