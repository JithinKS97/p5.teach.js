const global: any = globalThis;

import { createText, Text } from './lib/MObject/Text';

global.createText = createText;
global.Text = Text;

import { createTeX, TeX } from './lib/MObject/TeX';

global.createTeX = createTeX;
global.TeX = TeX;

import { add } from './lib/Scene/add';
global.add = add;

import { play } from './lib/Scene/play';
global.play = play;

import { Scene } from './lib/Scene/scene';
global.Scene = Scene;

import {
  //sceneTime,
  createControls,
  clock
  // pauseScene,
  // playScene,
  // restartScene
} from './lib/Scene/controls';
//global.sceneTime = sceneTime;
global.createControls = createControls;
global.clock = clock;
// global.pauseScene = pauseScene;
// global.playScene = playScene;
// global.restartScene = restartScene;
