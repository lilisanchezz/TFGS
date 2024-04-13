module.exports = async (db) => {
// MONGODB
console.log("Creating database...");

// Users Collection
await db.createCollection("users", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["name", "email","salt", "hash"],
        properties: {
          id: {
            bsonType: "int"
          },
          name: {
            bsonType: "string"
          },
          email: {
            bsonType: "string",
          },
          salt: {
            bsonType: "string"
          },
          hash: {
            bsonType: "string"
          },
          cites_rebs: {
            bsonType: "array",
            items: {
              bsonType: "object",
              properties: {
                citaId: {
                  bsonType: "objectId"//en algun moment s'hauria de posar les hores
                },
                TimeId: {
                  bsonType: "objectId"
                },
                DayId: {
                  bsonType: "objectId"
                },
                Reason: {
                  bsonType: "string",
                },
              }
            }
          },
          resultats_reb: {
            bsonType: "array",
            items: {
              bsonType: "object",
              properties: {
                resultatId: {
                  bsonType: "objectId"
                },

                //COM PENGEM EL PDF DEL RESULTAT A LA BD?
              }
            }
          },
        }
      }
    }
  });
  
//Doctor collection
  await db.createCollection("doctor", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["name", "email","salt", "hash"],
        properties: {
          id: {
            bsonType: "int"
          },
          name: {
            bsonType: "string"
          },
          email: {
            bsonType: "string",
          },
          salt: {
            bsonType: "string"
          },
          hash: {
            bsonType: "string"
          },
          cites_dones: {
            bsonType: "array",
            items: {
              bsonType: "object",
              properties: {
                citaId: {
                  bsonType: "objectId"
                },
                TimeId: {
                  bsonType: "objectId"
                },
                DayId: {
                  bsonType: "objectId"
                },
                Reason: {
                  bsonType: "string",
                },
              }
            }
          },
          resultats_dones: {
            bsonType: "array",
            items: {
              bsonType: "object",
              properties: {
                resultatId: {
                  bsonType: "objectId"
                },

                //COM PENGEM EL PDF DEL RESULTAT A LA BD?
              }
            }
          },
        }
      }
    }
  });
  
  
  // Horari Collection
  db.createCollection("horari", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["startTime", "endTime"],
        properties: {
          startTime: {
            bsonType: "date"
          },
          endTime: {
            bsonType: "date"
          }
        }
      }
    }
  });
  db.createCollection("news", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["new"],
        properties: {
          newId: {
            bsonType: "string"
          },
          titol: {
            bsonType: "string"
          },
          data: {
            bsonType: "string"
          },
          //COM POSEM LA IMATGE???
          descripcio: {
            bsonType: ""
          },
        }
      }
    }
  });
  db.createCollection("activities", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["activity"],
        properties: {
          activityId: {
            bsonType: "string"
          },
          titol: {
            bsonType: "string"
          },
          data: {
            bsonType: "string"
          },
          //COM POSEM LA IMATGE???
          descripcio: {
            bsonType: ""
          },
        }
      }
    }
  });

  console.log("Database created successfully.");

};