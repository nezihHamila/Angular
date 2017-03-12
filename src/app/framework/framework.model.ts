export class QuestionModel {
    constructor(
        public id: string, 
        public contenue: string, 
        public type: string,
        public reponses: Reponses[]
        
        ){}

}
export class Reponses {
    constructor(
        public id: string, 
        public contenue: string, 
        public type: string,
        ){}
        
}
