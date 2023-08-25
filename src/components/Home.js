import React, { useState, useRef, useEffect } from "react";
import {
  BtnDeleteFish,
  Buttons,
  FishForm,
  FishItem,
  FishList,
  PageContainer,
  TabButtons,
  Input,
  RadioButtons,
  BtnAdd,
  Fish,
  PlanButton,
} from "./HomeStyle";
import { fish } from "./Fish";
export default function Home() {
  const fishCount = useRef(fish.length);
  const [listOfFish, setListOfFish] = useState(fish);
  const [newFish, setNewFish] = useState({
    id: fishCount.current + 1,
    name: "",
    size: "",
  });

  let [numOfSmall, setNumOfSmall] = useState(2);
  let [numOfBig, setNumOfBig] = useState(2);

  const handleDeleteFish = (idRemove) => {
    let fistToDel = listOfFish.filter((fish) => fish.id === idRemove);
    if (fistToDel[0].size === "small") {
      setNumOfSmall(--numOfSmall);
    } else {
      setNumOfBig(--numOfBig);
    }
    setListOfFish(listOfFish.filter((fish) => fish.id !== idRemove));
  };

  const [activeTab, setActiveTab] = useState("fish-list");

  const handleChange = (event) => {
    const updateFish = {
      ...newFish,
      [event.target.name]: event.target.value,
    };
    setNewFish(updateFish);
    validateData(updateFish);
  };

  const handleChangeSize = (event) => {
    setNewFish((fish) => ({ ...fish, size: event.target.value }));
  };

  const handleAdd = () => {
    setListOfFish((listOfFish) => {
      return [...listOfFish, newFish];
    });
    if (newFish.size === "small") {
      setNumOfSmall(++numOfSmall);
    } else if (newFish.size === "big") {
      setNumOfBig(++numOfBig);
    }
    fishCount.current++;
    const cleanUp = {
      id: fishCount.current + 1,
      name: "",
      size: "",
    };
    setNewFish(cleanUp);
    setValid(false);
  };

  const [valid, setValid] = useState(false);
  const validateData = (fish) => {
    if (fish.name === "" || fish.name.trim().length === 0) {
      return setValid(false);
    }
    setValid(true);
  };

  let aquariumSize = numOfBig * 20 + numOfSmall * 10;
  let [planAquariumBtn, setPlanAquariumBtn] = useState(false);
  let [length, setLength] = useState(0);
  let [width, setWidth] = useState(0);
  let [height, setHeight] = useState(0);
  let wantedAquarium = parseFloat(length * width * height);

  useEffect(() => {
    if (isNaN(length) || isNaN(width) || isNaN(height)) {
      setPlanAquariumBtn(false);
      return;
    }

    if (wantedAquarium < aquariumSize) {
      setPlanAquariumBtn(false);
    } else {
      setPlanAquariumBtn(true);
    }

    if (length === 0 || width === 0 || height === 0) {
      setPlanAquariumBtn(false);
    }
  }, [height, length, width, aquariumSize, wantedAquarium]);

  const handleAquarium = (e) => {
    if (e.target.name === "height") {
      setHeight(parseInt(e.target.value));
    }
    if (e.target.name === "length") {
      setLength(parseInt(e.target.value));
    }
    if (e.target.name === "width") {
      setWidth(parseInt(e.target.value));
    }
  };
  //let finalAqua=parseFloat(wantedAquarium);
  return (
    <PageContainer>
      <Buttons>
        <TabButtons
          name="fish-list"
          data-active={activeTab}
          onClick={() => {
            setActiveTab("fish-list");
          }}
        >
          Fish list
        </TabButtons>
        <TabButtons
          name="aquarium"
          data-active={activeTab}
          onClick={() => {
            setActiveTab("aquarium");
          }}
        >
          Aquarium
        </TabButtons>
      </Buttons>
      {activeTab === "fish-list" && (
        <>
          <FishList name="fishList">
            {listOfFish.map((fish) => {
              return (
                <FishItem key={fish.id} name={fish.name}>
                  {fish.name} - {fish.size} fish
                  <BtnDeleteFish
                    onClick={() => {
                      handleDeleteFish(fish.id);
                    }}
                  >
                    X
                  </BtnDeleteFish>
                </FishItem>
              );
            })}
          </FishList>
          <FishForm>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={newFish.name}
              onChange={handleChange}
            />
            <RadioButtons>
              <label htmlFor="rb1">
                <input
                  type="radio"
                  id="rb1"
                  name="size"
                  value="small"
                  checked={newFish.size === "small"}
                  onChange={handleChangeSize}
                />
                Small
              </label>
              <label htmlFor="rb2">
                <input
                  type="radio"
                  name="size"
                  id="rb2"
                  value="big"
                  checked={newFish.size === "big"}
                  onChange={handleChangeSize}
                />
                Big
              </label>
            </RadioButtons>
            <BtnAdd onClick={handleAdd} disabled={!valid}>
              Add Fish
            </BtnAdd>
          </FishForm>
        </>
      )}
      {activeTab === "aquarium" && (
        <>
          <h2>Aquarium planner</h2>
          <Fish>
            <div>Small: {numOfSmall}</div>
            <div>Big: {numOfBig}</div>
          </Fish>
          <div>
            Minimum size for your aquarium is: {aquariumSize}
            dm<sup>3</sup>
          </div>
          <br />
          <div>Height in dm:</div>
          <Input
            type="number"
            name="height"
            placeholder="Enter height"
            min="0"
            onChange={handleAquarium}
          />
          <div>Width in dm:</div>
          <Input
            type="number"
            name="width"
            placeholder="Enter width"
            min="0"
            onChange={handleAquarium}
          />
          <div>Length in dm:</div>
          <Input
            type="number"
            name="length"
            placeholder="Enter length"
            min="0"
            onChange={handleAquarium}
          />
          <PlanButton
            id="planAquariumBtn"
            disabled={!planAquariumBtn}
            style={{ backgroundColor: planAquariumBtn ? "green" : "red" }}
          >
            Plan Aquarium
          </PlanButton>
        </>
      )}
    </PageContainer>
  );
}
