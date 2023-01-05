const User = require("./models/User.model");
const Profile = require("./models/Profile.model");
const EtatNutritionel = require('./models/EtatNutritionel.model');
const ActivityPhysic = require('./models/ActivitePhysique.model');
const LevelDegustation = require('./models/LevelDegustation.model');
const Allegene = require('./models/Alegene.model');
const Diseases = require("./models/Diseases.model");
const Culture = require("./models/Culture.model");
const Religion = require("./models/Religion.model");
const BodyPart = require("./models/BodyPart.model");
const BodyFunction = require("./models/BodyFuction.model");
const Health = require("./models/Health.model");
const Food = require("./models/Food.model");
const FoodItem = require("./models/FoodItem.model");
const Nutriment = require("./models/Nutriment.model");
const NutrimentMeasure = require("./models/NutrimentMeasure.model");

const resolvers = {
    Query:{
        
        getAllUsers: async () =>{
            return await User.find() 
        },
        getUser: async (_parent, {id}, _context, _infos) =>{
            return await User.findById(id)
        },

        getAllProfiles: async () =>{
            return await Profile.find() 
        },
        getProfile: async (_parent, {id}, _context, _infos) =>{
            return await Profile.findById(id)
        },

        getAllEtatNus: async () =>{
            return await EtatNutritionel.find()
        },
        getEtatNu: async (_parent, {id}, _context, _infos) =>{
            return await EtatNutritionel.findById(id)
        },
        getAllLevelDes: async () =>{
            return await LevelDegustation.find()
        },
        getLevelDe: async (_parent, {id}, _context, _infos) =>{
            return await LevelDegustation.findById(id)
        },

        getAllActivityPhys: async () =>{
            return await ActivityPhysic.find()
        },
        getActivityPhy: async (_parent, {id}, _context, _infos) =>{
            return await ActivityPhysic.findById(id)
        },

        getAllAllegenes: async () =>{
            return await Allegene.find()
        },
        getAllegene: async (_parent, {id}, _context, _infos) =>{
            return await Allegene.findById(id)
        },

        getAllDiseases: async () =>{
            return await Diseases.find()
        },
        getDisease: async (_parent, {id}, _context, _infos) =>{
            return await Diseases.findById(id)
        },

        getAllCultures: async () =>{
            return await Culture.find()
        },
        getCulture: async (_parent, {id}, _context, _infos) =>{
            return await Culture.findById(id)
        },
        getAllReligions: async () =>{
            return await Religion.find()
        },
        getReligion: async (_parent, {id}, _context, _infos) =>{
            return await Religion.findById(id)
        },
        getAllBodyParts: async () =>{
            return await BodyPart.find()
        },
        getBodyPart: async (_parent, {id}, _context, _infos) =>{
            return await BodyPart.findById(id)
        },
        getAllBodyFuncs: async () =>{
            return await BodyFunction.find()
        },
        getBodyFunc: async (_parent, {id}, _context, _infos) =>{
            return await BodyFunction.findById(id)
        },
        getAllHealths: async () =>{
            return await Health.find()
        },
        getHealth: async (_parent, {id}, _context, _infos) =>{
            return await Health.findById(id)
        },
        getAllFoods: async () =>{
            return await Food.find()
        },
        getFood: async (_parent, {id}, _context, _infos) =>{
            return await Food.findById(id)
        },
        getAllFoodItems: async () =>{
            return await FoodItem.find()
        },
        getFoodItem: async (_parent, {id}, _context, _infos) =>{
            return await FoodItem.findById(id)
        },
        getAllNutriments: async () =>{
            return await Nutriment.find()
        },
        getNutriment: async (_parent, {id}, _context, _infos) =>{
            return await Nutriment.findById(id)
        },
        getAllNutrimentMeasures: async () =>{
            return await NutrimentMeasure.find()
        },
        getNutrimentMeasure: async (_parent, {id}, _context, _infos) =>{
            return await NutrimentMeasure.findById(id)
        },
    },
    Mutation: {
        createUser: async (parent, args, context, info) =>{
            const {name, surname, sexe, adress, pseudo} = args.user;
            const user = new User({name, surname, sexe, adress, pseudo});
            await user.save();
            return user; 
        },
        deleteUser: async (parent, args, context, infos) =>{
            const {id} = args
            await User.findByIdAndDelete(id);
            return 'ok deleted....';
        },

        updateUser: async (parent, args, context, infos) =>{
           const {id} = args
           const {name, surname, sexe, adress, pseudo} = args.user;
           const update = {}

           if(name !== undefined){
            update.name = name
           }

           if(surname !== undefined){
            update.surname = surname
           }

           if(sexe !==undefined){
            update.sexe = sexe
           }
            
           if(adress !== undefined){
            update.adress = adress
           }
           if(pseudo !== undefined){
            update.pseudo = pseudo
           }
           const user = await User.findByIdAndUpdate(id, update, {new:true});
           return user; 
        },


        createEtatNu: async (parent, args, context, infos) =>{
            const {categorie} = args.etatNu;
            const etatNu = EtatNutritionel({categorie});
            await etatNu.save();
            return etatNu;
        },
        deleteEtatNu: async (parent, args, context, infos) =>{
            const {id} = args
            await EtatNutritionel.findByIdAndDelete(id);
            return "Ok deleted...";
        },
        updateEtatNu: async (parent, args, context, infos) =>{
            const {id} = args
            const {categorie} = args.etatNu
            const update = {}

            if(categorie !==undefined){
                update.categorie = categorie
            }

            const etataNu = EtatNutritionel.findByIdAndUpdate(id, update, {new:true});

            return etataNu;
        },

        createBodyFunc: async (parent, args, context, infos) =>{
            const {name} = args.bodyFunc;
            const bodyFunc = BodyFunction({name});
            await bodyFunc.save();
            return bodyFunc;
        },
        deleteBodyFun: async (parent, args, context, infos) =>{
            const {id} = args
            await BodyFunction.findByIdAndDelete(id);
            return "Ok deleted...";
        },
        updateBodyFun: async (parent, args, context, infos) =>{
            const {id} = args
            const {name} = args.bodyFunc
            const update = {}

            if(name !==undefined){
                update.name = name
            }

            const bodyFunc = BodyFunction.findByIdAndUpdate(id, update, {new:true});

            return bodyFunc;
        },

        
        createHealth: async (parent, args, context, infos) =>{
            const {etat_sante} = args.health;
            const health = Health({etat_sante});
            await health.save();
            return health;
        },
        deleteHealth: async (parent, args, context, infos) =>{
            const {id} = args
            await Health.findByIdAndDelete(id);
            return "Ok deleted...";
        },
        updateHealth: async (parent, args, context, infos) =>{
            const {id} = args
            const {etat_sante} = args.health
            const update = {}

            if(etat_sante !==undefined){
                update.etat_sante = etat_sante
            }

            const health = Health.findByIdAndUpdate(id, update, {new:true});

            return health;
        },


        createBodyPart: async (parent, args, context, infos) =>{
            const {name, body_function_id } = args.bodyPart;
            const bodyPart = BodyFunction({name, body_function_id});
            await bodyPart.save();
            return bodyPart;
        },
        deleteBodyPart: async (parent, args, context, infos) =>{
            const {id} = args
            await BodyPart.findByIdAndDelete(id);
            return "Ok deleted...";
        },
        updateBodyPart: async (parent, args, context, infos) =>{
            const {id} = args
            const {name, body_function_id} = args.bodyPart
            const update = {}

            if(name !==undefined){
                update.name = name
            }
            if(body_function_id !==undefined){
                update.body_function_id = body_function_id
            }

            const bodyPart = BodyPart.findByIdAndUpdate(id, update, {new:true});

            return bodyPart;
        },

        createFood: async (parent, args, context, infos) =>{
            const {name, ingredients } = args.food;
            const food = BodyFunction({name, ingredients});
            await food.save();
            return food;
        },
        deleteFood: async (parent, args, context, infos) =>{
            const {id} = args
            await Food.findByIdAndDelete(id);
            return "Ok deleted...";
        },
        updateFood: async (parent, args, context, infos) =>{
            const {id} = args
            const {name, ingredients} = args.food
            const update = {}

            if(name !==undefined){
                update.name = name
            }
            if(ingredients !==undefined){
                update.ingredients = ingredients
            }

            const food = Food.findByIdAndUpdate(id, update, {new:true});

            return food;
        },
        createNutrimentMeasure: async (parent, args, context, infos) =>{
            const {unity, quantity } = args.nutrimentMeasure;
            const nutrimentMeasure = NutrimentMeasure({unity, quantity});
            await nutrimentMeasure.save();
            return nutrimentMeasure;
        },
        deleteNutrimentMeasure: async (parent, args, context, infos) =>{
            const {id} = args
            await NutrimentMeasure.findByIdAndDelete(id);
            return "Ok deleted...";
        },
        updateNutrimentMeasure: async (parent, args, context, infos) =>{
            const {id} = args
            const {unity, quantity} = args.nutrimentMeasure
            const update = {}

            if(unity !==undefined){
                update.unity = unity
            }
            if(quantity !==undefined){
                update.quantity = quantity
            }

            const nutrimentMeasure = NutrimentMeasure.findByIdAndUpdate(id, update, {new:true});

            return nutrimentMeasure;
        },

        createFoodItem: async (parent, args, context, infos) =>{
            const {name, categorie, sous_categorie, nutriment_id, type_food } = args.foodIteme;
            const foodItem = FoodItem({name, categorie, sous_categorie, nutriment_id, type_food });
            await foodItem.save();
            return foodItem;
        },
        deleteFoodItem: async (parent, args, context, infos) =>{
            const {id} = args
            await Food.findByIdAndDelete(id);
            return "Ok deleted...";
        },
        updateFoodItem: async (parent, args, context, infos) =>{
            const {id} = args
            const {name, categorie, sous_categorie, nutriment_id, type_food } = args.foodItem
            const update = {}

            if(name !==undefined){
                update.name = name
            }
            if(categorie !==undefined){
                update.categorie = categorie
            }
            if(sous_categorie !==undefined){
                update.sous_categorie = sous_categorie
            }
            if(nutriment_id !==undefined){
                update.nutriment_id = nutriment_id
            }
            if(type_food !==undefined){
                update.type_food = type_food
            }

            const foodItem = FoodItem.findByIdAndUpdate(id, update, {new:true});

            return foodItem;
        },
        createNutriment: async (parent, args, context, infos) =>{
            const {name, mesure_id, quantity_rd } = args.nutriment;
            const nutrimentd = Nutriment({name, mesure_id, quantity_rd });
            await nutriment.save();
            return nutriment;
        },
        deleteNutriment: async (parent, args, context, infos) =>{
            const {id} = args
            await Nutriment.findByIdAndDelete(id);
            return "Ok deleted...";
        },
        updateNutriment: async (parent, args, context, infos) =>{
            const {id} = args
            const {name, mesure_id, quantity_rd } = args.nutriment
            const update = {}

            if(name !==undefined){
                update.name = name
            }
            if(mesure_id !==undefined){
                update.mesure_id = mesure_id
            }
            if(quantity_rd !==undefined){
                update.quantity_rd = quantity_rd
            }

            const nutriment = Nutriment.findByIdAndUpdate(id, update, {new:true});

            return nutriment;
        },


        createCulture: async (parent, args, context, infos) =>{
            const {name, interdites, region} = args.culture;
            const culture = Culture({name, interdites, region});
            await culture.save();
            return culture;
        },
        deleteCulture: async (parent, args, context, infos) =>{
            const {id} = args
            await Culture.findByIdAndDelete(id);
            return "Ok deleted...";
        },
        updateCulture: async (parent, args, context, infos) =>{
            const {id} = args
            const {name, interdites, region} = args.culture
            const update = {}

            if(name !==undefined){
                update.name = name
            }
            if(interdites !==undefined){
                update.interdites = interdites
            }
            if(region !==undefined){
                update.region = region
            }

            const culture = Culture.findByIdAndUpdate(id, update, {new:true});

            return culture;
        },

        createReligion: async (parent, args, context, infos) =>{
            const {name, interdites} = args.religion;
            const religion = Religion({name, interdites});
            await religion.save();
            return religion;
        },
        deleteReligion: async (parent, args, context, infos) =>{
            const {id} = args
            await Religion.findByIdAndDelete(id);
            return "Ok deleted...";
        },
        updateReligion: async (parent, args, context, infos) =>{
            const {id} = args
            const {name, interdites} = args.religion
            const update = {}

            if(name !==undefined){
                update.name = name
            }
            if(interdites !==undefined){
                update.interdites = interdites
            }

            const religion = Religion.findByIdAndUpdate(id, update, {new:true});

            return religion;
        },


        creatLevelDe: async (parent, args, context, infos) =>{
            const {categorie} = args.etatNu;
            const levelDe = LevelDegustation({categorie});
            await levelDe.save();
            return levelDe;
        },
        deleteLevelDe: async (parent, args, context, infos) =>{
            const {id} = args
            await LevelDegustation.findByIdAndDelete(id);
            return "Ok deleted...";
        },
        updateLevelDe: async (parent, args, context, infos) =>{
            const {id} = args
            const {categorie} = args.levelDe
            const update = {}

            if(categorie !==undefined){
                update.categorie = categorie
            }

            const levelDe = LevelDegustation.findByIdAndUpdate(id, update, {new:true});

            return levelDe;
        },

        createActivityPhy: async (parent, args, context, infos) =>{
            const {categorie} = args.activityPhy;
            const activityPhy = ActivityPhysic({categorie});
            await activityPhy.save();
            return activityPhy;
        },
        deleteActivityPhy: async (parent, args, context, infos) =>{
            const {id} = args
            await ActivityPhysic.findByIdAndDelete(id);
            return "Ok deleted...";
        },
        updateActivityPhy: async (parent, args, context, infos) =>{
            const {id} = args
            const {categorie} = args.activityPhy
            const update = {}

            if(categorie !==undefined){
                update.categorie = categorie
            }

            const activityPhy = ActivityPhysic.findByIdAndUpdate(id, update, {new:true});

            return activityPhy;
        },

        createDisease: async (parent, args, context, infos) =>{
            const {disease_name, disease_type, disease_symptomes} = args.activityPhy;
            const disease = Diseases({disease_name, disease_type, disease_symptomes});
            await disease.save();
            return disease;
        },
        deleteDisease: async (parent, args, context, infos) =>{
            const {id} = args
            await Diseases.findByIdAndDelete(id);
            return "Ok deleted...";
        },
        updateDisease: async (parent, args, context, infos) =>{
            const {id} = args
            const {disease_name, disease_type, disease_symptomes} = args.activityPhy
            const update = {}

            if(disease_name !==undefined){
                update.disease_name = disease_name
            }
            if(disease_type !==undefined){
                update.disease_type = disease_type
            }
            if(disease_symptomes !==undefined){
                update.disease_symptomes = disease_symptomes
            }

            const disease = Diseases.findByIdAndUpdate(id, update, {new:true});

            return disease;
        },

        createAllegene: async (parent, args, context, infos) =>{
            const {allegene_name, allegene_type, food_id, symptomes} = args.allegene;
            const allegene = Allegene({allegene_name, allegene_type, food_id, symptomes});
            await allegene.save();
            return allegene;
        },
        deleteAllegene: async (parent, args, context, infos) =>{
            const {id} = args
            await Allegene.findByIdAndDelete(id);
            return "Ok deleted...";
        },
        updateAllegene: async (parent, args, context, infos) =>{
            const {id} = args
            const {allegene_name, allegene_type, food_id, symptomes} = args.activityPhy
            const update = {}

            if(allegene_name !==undefined){
                update.allegene_name = allegene_name
            }
            if(allegene_type !==undefined){
                update.allegene_type = allegene_type
            }
            if(food_id !==undefined){
                update.food_id = food_id
            }
            if(symptomes !==undefined){
                update.symptomes = symptomes
            }

            const allegene = Allegene.findByIdAndUpdate(id, update, {new:true});

            return allegene;
        },



        createProfile: async (parent, args, context, info) =>{
            const {type_profile, poids, taille, imc, etat_nut_id, level_degus_id, activity_phy_id} = args.profile;
            imc = poids/square(taille);
            const profile = new Profile({type_profile, poids, taille, imc, etat_nut_id, level_degus_id, activity_phy_id});
            await profile.save();
            return profile; 
        },

        deleteProfile: async (parent, args, context, infos) =>{
            const {id} = args
            await Profile.findByIdAndDelete(id);
            return 'ok deleted....';
        },
        updateProfile: async (parent, args, context, infos) =>{
            const {id} = args
            const {type_profile, poids, taille, imc, etat_nut_id, level_degus_id, activity_phy_id} = args.profile;
            const update = {}
 
            if(type_profile !== undefined){
             update.type_profile = type_profile
            }
 
            if(poids !== undefined){
             update.poids = poids
            }
 
            if(taille !==undefined){
             update.taille = taille
            }
             
            if(imc !== undefined){
             update.imc = imc
            }
            if(etat_nut_id !== undefined){
             update.etat_nut_id = etat_nut_id
            }
            if(level_degus_id!== undefined){
                update.level_degus_id = level_degus_id
            }
            if(activity_phy_id !== undefined){
                update.activity_phy_id = activity_phy_id
            }
            const profile = await Profile.findByIdAndUpdate(id, update, {new:true});
            return profile; 
         },




    },
};

module.exports = resolvers; 