/**En esta consulta nos devolvera todos los documentos de la coleccion*/
db.inventory.find({})

/**Esta colsulta nos devuelve los documentos que tienen status "D" */
db.inventory.find( { status: "D" } )

/**Nos devuelve todos los dumentos pertenecientes a "A" y "D" */
db.inventory.find( { status: { $in: [ "A", "D" ] } } )

/**Esta consulta nos devuelve los valores pertenecientes a "A" y que son inferiores a la cantidad especificada */
db.inventory.find( { status: "A", qty: { $lt: 30 } } )

/**esta consulta devuelve todos los documentos que pertenecen a "A" o los que su cantidad es inferior a 30 */
db.inventory.find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } )

/**Esta consulta devuelve los documentos pertenecientes a "A" y los que si cantidad sean inferior a 30 o el item empiece por "p" */
db.inventory.find( { status: "A", $or: [ { qty: { $lt: 30 } }, { item: /^p/ } ]} )

//*A continuacion realizamos nuestras propias consultas */

/**Esta consulta devuelve los documentos pertenecientes a D en los que la cantidad es mayor o igual a 75 */
db.inventory.find( { status: "D" , $or: [ {qty: {$gte: 75} } ] } )

/**Esta consulta devuelve todos los documentos pertenecientes a "A" y "B" y que la medida esta en cm */
db.inventory.find({ $or: [ {status:{ $in: ["A" ,"B"]}}, {size: "cm"} ]})

/**Esta consulta muestra los documentos de "A" ,"B", "C" y "D" donde la cantidad es menor de 50 o empiezan por c */
db.inventory.find( { status: {$in: ["A", "B","C","D"]} , $or: [ { qty: { $lt: 50 } }, { item: /^c/ } ]} )

/**Esta consulta muestra los documentos de "A" ,"B", "C" y "D" que empiezan por "c" */
db.inventory.find({status: {$in: ["A", "B","C","D"]}, $or: [{ item: /^c/ } ] })

/**Esta consulta muestra todos los documentos que empiezan por "p" y que su cantidad es mayor o igual a 50 */
db.inventory.find({item: /^p/, $or: [ {qty: {$gte:50}}] })