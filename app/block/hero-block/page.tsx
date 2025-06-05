import Container from "@/components/Container";
import NavigationBar from "@/components/navigation-bar/NavigationBar";
import React from "react";
import HeroBlock from "./HeroBlock";


const page = () => {
  return (
    <>
      <NavigationBar />
      <Container>
      
          <HeroBlock />
          
      </Container>
    </>
  );
};

export default page;
