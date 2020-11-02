db.inventory.insertMany([
    { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
    { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
    { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
    { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
    { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" }
 ]);

 db.inventory.insertMany([
    { item: "carpet", qty: 15, size: { h: 14, w: 21, uom: "cm" }, status: "B" },
    { item: "pencil", qty: 70, size: { h: 20, w: 0.5, uom: "cm" }, status: "B" },
    { item: "bag", qty: 30, size: { h: 35, w: 13.5, uom: "icm" }, status: "C" },
    { item: "case", qty: 10, size: { h: 22.85, w: 30, uom: "cm" }, status: "C" },
    { item: "pen", qty: 80, size: { h: 10, w: 1, uom: "cm" }, status: "B" }
 ]);
