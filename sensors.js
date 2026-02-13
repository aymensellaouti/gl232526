/*
Vous travaillez sur le système de monitoring d'une ville connectée. 
Vous recevez un tableau d'objets représentant les capteurs déployés dans la ville (température, pollution, humidité).1. 
const sensors = [  
        { id: "TEMP_01", type: "temperature", value: 22.5, status: "active" },  
        { id: "POLL_01", type: "pollution", value: 85, status: "active" }, 
        { id: "HUM_01", type: "humidity", value: 45, status: "inactive" },  
        { id: "TEMP_02", type: "temperature", value: 31.0, status: "active" },  
        { id: "POLL_02", type: "pollution", value: 42, status: "active" },  
        { id: "TEMP_03", type: "temperature", value: -5.0, status: "faulty" }]; 
Parcourir le tableau et afficher dans la console l'ID de chaque capteur et son état (ex: "Capteur TEMP_01 : active").
Créer un nouveau tableau criticalAlerts. Un capteur doit y être ajouté si :Son type est "pollution" et sa valeur est > 80.OU son statut est "faulty".
Affichez le tableau final.
Calculer la température moyenne de tous les capteurs de type "temperature" (uniquement ceux qui ne sont pas "faulty").
Créer un script qui pour un type de capteur, change le statut de tous les capteurs de ce type de "inactive" ou "faulty" vers "active". 
*/
const sensors = [
    { id: "TEMP_01", type: "temperature", value: 22.5, status: "active" },
    { id: "POLL_01", type: "pollution", value: 85, status: "active" },
    { id: "HUM_01", type: "humidity", value: 45, status: "inactive" },
    { id: "TEMP_02", type: "temperature", value: 31.0, status: "active" },
    { id: "POLL_02", type: "pollution", value: 42, status: "active" },
    { id: "TEMP_03", type: "temperature", value: -5.0, status: "faulty" }
];; 

const noFaultYTempareture = sensors.filter(
    (sensor) => sensor.type == 'temperature' && sensor.status != 'faulty'
);
console.log(noFaultYTempareture);

const avgNoFaultYTempareture = noFaultYTempareture.reduce(
    (accumulateur, sensor) => accumulateur + sensor.value, 0
) / noFaultYTempareture.length;
console.log(avgNoFaultYTempareture);
