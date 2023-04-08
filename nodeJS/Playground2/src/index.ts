import "reflect-metadata";
import {createConnection, ConnectionManager} from "typeorm";
import {User} from "./entity/User";
import{Photo} from "./entity/Photo";

createConnection().then(async connection => {

    //CREATE
    // let photo = new Photo();
    // photo.name = "Har Har Mahadev";
    // photo.description = "The Ruler of Himalayas";
    // photo.filename = "LordShiva.jpg";
    // photo.views = 1111115555;
    // photo.isPublished = true;


    ////Using connection manager
    // await connection.manager.save(photo)
    // console.log("Photo has been saved. Photo id is", photo.id);
    ////Using photo repository
    let photoRepository = connection.getRepository(Photo);
    // await photoRepository.save(photo);
    // console.log("Photo has been saved" , photo.id);

    // //Read
    // let savedPhotos = await photoRepository.find();
    // console.log("All photos from the db:" , savedPhotos);
    // // const photos = await connection.manager.find(Photo);
    // // console.log("Loading photos:", photos);

    // //Read one
    // let lordRamPhoto = await photoRepository.find({name:"Jay Shree Ram"});
    // console.log("Photo from the db of Lord Ram: ", lordRamPhoto);
    
    


    // //Update
    // let photoToUpdate = await photoRepository.findOne(2);
    // photoToUpdate.name = "Radhe Krishna";
    // await photoRepository.save(photoToUpdate);

    // //Delete
    // let photoToRemove = await photoRepository.findOne(2);
    // await photoRepository.remove(photoToRemove);

    //Read and count
    let [allPhotos, photosCount] = await photoRepository.findAndCount();
    console.log("All photos", allPhotos);
    console.log("Photos Count" , photosCount);


}).catch(error => console.log(error));
