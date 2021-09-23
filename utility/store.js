let initialStore = {
  effects: [
    [false, 50, 50, 50],
    [false, 50, 50, 50],
    [false, 50, 50, 50],
    [false, 50, 50, 50],
    [false, 50, 50, 50],
    [false, 50, 50, 50],
  ],
  dmxGroups: [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  sliders: [50, 50],
};

let storedLastEffect = 0;

const handleEditPress = () => {
  setShowingEffectBox(!showingEffectBox);
};

const handleEffectPress = (id, toggle) => {
  storedLastEffect = id;
  let effects = [...initialStore.effects];
  effects[id] = [toggle, effects[id][1], effects[id][2], effects[id][3]];
  initialStore = {
    ...initialStore,
    effects: effects,
  };
  console.log(initialStore.effects);
};

const handleEditEffects = (values) => {
  console.log(storedLastEffect, values);
};

const handleEffectSliderValueChange = (id, value) => {
  console.log(id, value);
  // clone current values
  let effects = [...initialStore.effects];
  effects[storedLastEffect][id + 1] = value;

  initialStore = {
    ...initialStore,
    effects: effects,
  };
  console.log(initialStore.effects[storedLastEffect]);
};

const handleSliderValueChange = (id, value) => {
  let sliders = [...initialStore.sliders];
  sliders[id] = value;
  initialStore = {
    ...initialStore,
    sliders,
  };
};

const handleDMXPress = (id, value) => {
  let dmxGroups = [...initialStore.dmxGroups];
  dmxGroups[id] = value;
  initialStore = {
    ...initialStore,
    dmxGroups: dmxGroups,
  };
  console.log(initialStore.dmxGroups);
};

export {
  initialStore,
  storedLastEffect,
  handleEditPress,
  handleEffectPress,
  handleEditEffects,
  handleEffectSliderValueChange,
  handleSliderValueChange,
  handleDMXPress,
};
