const {gql}= require("apollo-server-express");

const typeDefs = gql`
    type User{
        id: ID
        name:String
        surname:String
        sexe:String
        adress:String
        pseudo:String
    }
    Type Profile{
        id: ID
        type_profile:String
        poids:Number
        taille:Number
        imc:Number
        etat_nut_id:String
        level_degus_id:String
        activity_phy_id:String
    }

    type EtatNutritionel{
        id:ID
        categorie:String
    }
    type LevelDegustation{
        id:ID
        categorie:String
    }

    type ActivityPhysic{
        id:ID
        categorie:String
    }

    type Culture{
        id:ID
        name:String
        interdites:String
        region:String
    }

    type Allegene{
        id:ID
        allegene_name:String
        allegene_type:String
        food_id:String
        symptomes:String
    }

    type Disease{
        id:ID
        disease_name:String
        disease_type:String
        disease_symptomes:String
    }

    type Religion{
        id:ID
        name:String
        interdites:String
    }

    type BodyPart{
        id:ID
        name:String
        body_function_id:String
    }

    
    type BodyFunction{
        id:ID
        name:String
    }

    
    type Health{
        id:ID
        etat_sante:String
    }

    type Food{
        id:ID
        name:String
        ingredients:String
    }

    type FoodItem{
        id:ID
        name:String
        categorie:String
        sous_categorie:String
        nutriment_id:String
        type_food:String
    }

    type Nutriment{
        id:ID
        name:String
        mesure_id:String
        quantity_rd:Number
    }

    type NutrimentMeasure{
        id:ID
        unity:String
        quantity:Number
    }




    type Query{
        hello:String

        getAllUsers: [User]
        getUser(id:ID):User


        getAllProfiles: [Profile]
        getProfile(id:ID):Profile

        getAllLevelDes: [LevelDegustation]
        getLevelDe(id:ID):LevelDegustation

        getAllActivityPhy: [ActivityPhysic]
        getActivityPhy(id:ID):ActivityPhysic



        getAllAllegenes:[Allegene]
        getAllegene(id:ID):Allegene

        getAllDiseases:[Disease]
        getDisease(id:ID):Disease

        getAllBodyparts: [BodyPart]
        getBodypart(id:ID):BodyPart

        getAllCultures: [Culture]
        getCulture(id:ID):Culture

        getAllBodyFuncs: [BodyFunction]
        getBodyFunc(id:ID):BodyFunction

        getAllHealths: [Health]
        getHealth(id:ID):Health

        getAllFoods: [Food]
        getFood(id:ID):Food

        getAllFoodItems: [FoodItem]
        getFoodItem(id:ID):FoodItem

        getAllNutriments: [Nutriment]
        getNutriment(id:ID):Nutriment

        getAllNutrimentMeasures: [NutrimentMeasure]
        getNutrimentMeasure(id:ID):NutrimentMeasure
    }

    input UserInput{
        name:String
        surname:String
        sexe:String
        adress:String
        pseudo:String
    }

    input ProfileInput{
        type_profile:String
        poids:Number
        taille:Number
        imc:Number
        etat_nut_id:String
        level_degus_id:String
        activity_phy_id:String
    }
    input EtatNutritionelInput{
        categorie:String
    }
    input LevelDegustationInput{
        categorie:String
    }
    input ActivityPhysicInput{
        categorie:String
    }

    input AllegeneInput{
        allegene_name:String
        allegene_type:String
        food_id:String
        symptomes:String
    }
    input DiseaseInput{
        disease_name:String
        disease_type:String
        disease_symptomes:String
    }

    input BodyPartInput{
        name:String
        body_function_id:String
    }

    input BodyFunctionInput{
        name:String
    }

    input CultureInput{
        name:String
        interdites:String
        region:String
    }

    input ReligionInput{
        name:String
        interdites:String
    }

    input HealthInput{
        etat_sante:String
    }

    input FoodInput{
        name:String
        ingredients:String
    }

    input FoodItemInput{
        name:String
        categorie:String
        sous_categorie:String
        nutriment_id:String
        type_food:String
    }

    input NutrimentInput{
        name:String
        mesure_id:String
        quantity_rd:Number
    }

    input NutrimentMeasureInput{
        unity:String
        quantity:Number
    }




    type Mutation{
        createUser(user: UserInput): User
        deleteUser(id:ID):String
        updateUser(id:ID, user: UserInput):User

        creatProfile(profile:ProfileInput):Profile
        deleteProfile(id:ID):String
        updateProfile(id:ID, profile: ProfileInput):Profile

        createEtatNu(etataNu: EtatNutritionelInput):EtatNutritionel
        deleteEtatNu(id:ID):String
        updateEtatNu(id:ID, etatNu:EtatNutritionelInput):EtatNutritionel
        
        createLevelDe(levelDe: LevelDegustationInput):LevelDegustation
        deleteLevelDe(id:ID):String
        updateLevelDe(id:ID, levelDe:LevelDegustationInput):LevelDegustation
        
        
        createActivityPhy(activityPhy: ActivityPhysicInput):ActivityPhysic
        deleteActivityPhy(id:ID):String
        updateActivityPhy(id:ID, activityPhy:ActivityPhysicInput):ActivityPhysic


        createAllegene(allegene: AllegeneInput):Allegene
        deleteAllegene(id:ID):String
        updateAllegene(id:ID, allegene:AllegeneInput):Allegene

        createDisease(disease: DiseaseInput):Disease
        deleteDisease(id:ID):String
        updateDisease(id:ID, disease:DiseaseInput):Disease

        createBodypart(bodyPart: BodyPartInput):BodyPart
        deleteBodypart(id:ID):String
        updateBodypart(id:ID, bodyPart:BodyPartInput):BodyPart
        
        createCulture(culture: CultureInput):Culture
        deleteCulture(id:ID):String
        updateCulture(id:ID, culture:CultureInput):Culture
        
        createReligion(religion: ReligionInput):Religion
        deleteReligion(id:ID):String
        updateReligion(id:ID, religion:ReligionInput):Religion
       
        createBodyFunc(bodyFunc: BodyFunctionInput):BodyFunction
        deleteBodyFunc(id:ID):String
        updateBodyFunc(id:ID, bodyFunc:BodyFunctionInput):BodyFunction

        createHealth(health: HealthInput):Health
        deleteHealth(id:ID):String
        updateHealth(id:ID, health:HealthInput):Health

        createFood(food: FoodInput):Food
        deleteFood(id:ID):String
        updateFood(id:ID, food:FoodInput):Food

        createFoodItem(foodItem: FoodItemInput):FoodItem
        deleteFoodItem(id:ID):String
        updateFoodItem(id:ID, foodItem:FoodItemInput):FoodItem

        createNutriment(nutriment: NutrimentInput):Nutriment
        deleteNutriment(id:ID):String
        updateNutriment(id:ID, nutriment:NutrimentInput):Nutriment

        createNutrimentMeasure(nutrimentMeasure: NutrimentMeasureInput):NutrimentMeasure
        deleteNutrimentMeasure(id:ID):String
        updateNutrimentMeasure(id:ID, nutrimentMeasure:NutrimentMeasureInput):NutrimentMeasure

    }
`;

module.exports = typeDefs;