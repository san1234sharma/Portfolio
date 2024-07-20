import React, { useEffect } from "react";
import "./Home.css";
import * as THREE from "three";
import venusimage from "../Images/venus.jpg";
import earthimage from "../Images/earth.avif"
import spaceimage from "../Images/space.jpg";
import { Typography } from "@mui/material";
import TimeLine from "../TimeLine/TimeLine";
import {
    SiCplusplus,
    SiReact,
    SiJavascript,
    SiMongodb,
    SiNodedotjs,
    SiExpress,
    SiCss3,
    SiHtml5,
    SiThreedotjs,
} from "react-icons/si";
import BoeingCard from "../Boeing/BoeingCard";
import { MouseOutlined } from "@mui/icons-material";
const Home = () => {
    useEffect(() => {
        const textureLoader = new THREE.TextureLoader();
        const venustexture = textureLoader.load(venusimage);
        const earthtexture = textureLoader.load(earthimage);
        const spacetexture = textureLoader.load(spaceimage);
        const scene  = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth/window.innerHeight,
            0.1,
            1000
        );
        const canvas = document.querySelector(".homeCanvas");
        const renderer = new THREE.WebGLRenderer({canvas});
        const earthgeometry = new THREE.SphereGeometry(2,64,64);
        const earthmaterial = new THREE.MeshStandardMaterial({map : earthtexture});
        const venusgeometry = new THREE.SphereGeometry(3,64,64);
        const venusmaterial = new THREE.MeshBasicMaterial({map : venustexture});
        const pointLight = new THREE.PointLight(0xffffff,1);
        const pointLight2 = new THREE.PointLight(0xffffff,0.1);
        pointLight.position.z = 5;
        pointLight2.position.set(-8,-5,-5);
        const earth = new THREE.Mesh(earthgeometry,earthmaterial);
        const venus = new THREE.Mesh(venusgeometry,venusmaterial);
        scene.add(earth);
        scene.add(pointLight);
        scene.add(pointLight2);
        scene.add(venus);
        scene.background = spacetexture;
        venus.position.set(8,5,5);
        camera.position.set(4,4,8);
        const speed = 0.01;
        window.addEventListener("mousemove", (e) => {
            if(e.clientX < window.innerWidth/2){
                earth.rotation.x -= speed;
                earth.rotation.y += speed;
                venus.rotation.x -= speed;
                venus.rotation.y += speed;
            }
            if(e.clientX >= window.innerWidth/2){
                earth.rotation.x -= speed;
                earth.rotation.y -= speed;
                venus.rotation.x -= speed;
                venus.rotation.y -= speed;
            }
            if(e.clientX > window.innerHeight/2){
                earth.rotation.x -= speed;
                earth.rotation.y += speed;
                venus.rotation.x -= speed;
                venus.rotation.y += speed;
            }
            if(e.clientX <= window.innerHeight/2){
                earth.rotation.x -= speed;
                earth.rotation.y -= speed;
                venus.rotation.x -= speed;
                venus.rotation.y -= speed;
            }
        });
        const animate = () => {
            requestAnimationFrame(animate);
            earth.rotation.y += 0.001;
            venus.rotation.y += 0.001;
            renderer.setSize(window.innerWidth,window.innerHeight);
            renderer.render(scene,camera);
        };
        animate();

        const handleScroll = () => {
            camera.rotation.y = window.scrollY * 0.001;
            camera.rotation.z = window.scrollY * 0.003;
            const skillsBox = document.getElementById("homeskillsbox");
            if (skillsBox) {
                if (window.scrollY > 1500) {
                    skillsBox.style.animationName = "homeskillsboxanimationon";
                } else {
                    skillsBox.style.animationName = "homeskillsboxanimationoff";
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
  return (
    <div className="home">
        <canvas className="homeCanvas"></canvas>
        <div className="homeCanvasContainer">
            <Typography variant="h1">
                <p>S</p>
                <p>A</p>  
                <p>N</p>  
                <p>C</p>  
                <p>H</p>  
                <p>I</p>  
                <p>T</p> 
            </Typography>
            <div className="homeCanvasBox">
                <Typography variant="h2">DEVELOPER</Typography>
                <Typography variant="h2">STUDENT</Typography>
                <Typography variant="h2">BOEING</Typography>
                <Typography variant="h2">IEEE</Typography>
            </div>
        </div>
        <div className="homeScrollBtn">
            <MouseOutlined/>
        </div>
        <div className="homeContainer">
            <Typography variant="h3">TIMELINE</Typography>
            <TimeLine timelines = {[
    { date: '2021-2025', title: 'BIT CSE', status: 'In Progress' },
    { date: 'MAY/2024 - JULY/2024', title: 'BOEING', status: 'Done' },
    { date: '2023-2024', title: 'IEEE CS CHAIRPERSON', status: 'In Progress' },
    { date: '2019-2021', title: 'PUC', status: 'Done' },
    { date: '2018-2019', title: 'SSLC', status: 'Done' },
    // add more items as needed
]}
/>
        </div>
        <div className="homeSkills">
            <Typography variant="h3">SKILLS</Typography>
            <div className="homeCubeSkills">
                <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
                    <img src="https://pbs.twimg.com/profile_images/1452637606559326217/GFz_P-5e_400x400.png" 
                    alt="face1"/> 
                </div>
                <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTkiW0kiaLJhfgYhLWcigaPD35TGpOJT0c4BnC0ZYlYELy4G0hjbfP5in9h3rRhcyxL9w&usqp=CAU" 
                    alt="face2"/> 
                </div>
                <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTthgF-hMP_8wf7m8--CQufro4dvKGbL0JWWA&s" 
                    alt="face3"/> 
                </div>
                <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
                    <img src="https://andrewbeeken.co.uk/wp-content/uploads/2018/11/nodejs.jpg?w=1200" 
                    alt="face4"/> 
                </div>
                <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
                    <img src="https://media.licdn.com/dms/image/D4E12AQEBg943ptCYpg/article-cover_image-shrink_720_1280/0/1686391647921?e=2147483647&v=beta&t=sTfwUvcIfW7Fuby7hMluDfuRJK3HfYMMWc2SyZR7-GA" 
                    alt="face5"/> 
                </div>
                <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
                    <img src="https://datascientest.com/en/wp-content/uploads/sites/9/2024/03/css3-1024x512-1.png" 
                    alt="face6"/> 
                </div>
            </div>
            <div className="cubeshadow"></div>
            <div className="homeskillsbox" id="homeskillsbox">
               <SiCplusplus />
               <SiReact />
               <SiJavascript />
               <SiMongodb />
               <SiNodedotjs />
               <SiExpress />
               <SiCss3 />
               <SiHtml5 />
               <SiThreedotjs />
            </div>
        </div>
        <div className="Achievements">
            <Typography variant="h3">ACHIEVEMENTS</Typography>
            <div className="BoeingInternship">
                <BoeingCard image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Boeing_full_logo_%28variant%29.svg/2560px-Boeing_full_logo_%28variant%29.svg.png"
                />
                <BoeingCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqJQkeAu-c_xAO92Gt-85jlsqiOKVDIQWkk03Z2h8xHg&s"
                />
                <BoeingCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdSRoD5SLTtYI3HsKeYabjuRsLnZ5gA5NzXt2Q2JlqOg&s"
                />
                <BoeingCard image="data:image/jpeg;base64,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"
                />
            </div>
        </div>
    </div>
  );
}

export default Home