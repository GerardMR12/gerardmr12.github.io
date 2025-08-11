---
layout: default
---

My name is Gerard Morales Riera. I graduated in Aerospace Technology Engineering and Engineering Physics from [Universitat Politècnica de Catalunya (UPC)](https://www.upc.edu/ca). I pursued this dual degree as part of the [CFIS-UPC](https://cfis.upc.edu/es/el-centro/que-es-el-cfis) program, which focuses on joint STEM degrees.

This dual degree was performed during the fixed amount of 4.5 years, where I got honours in subjects like Linear Algebra, Numerical Methods or Engineering Projects. At the end of this period, I completed my degree thesis at Prof. Daniel Selva's [research group](https://www.selva-research.com/), where conducted studies on AI-driven satellites.

Read below to get to know some insights about my work!

---

**Table of Contents**

1.  [Degree thesis](#degree-thesis)
2.  [UPC ecoRacing](#upc-ecoracing)

---

# Degree thesis

My thesis with Dr. Selva at Texas A&M, called [Earth Observation Satellite Planning Problem with Deep Reinforcement Learning and Transformers](/assets/files/Degree-Thesis-GerardMR.pdf), focused on developing advanced algorithms for optimizing satellite maneuvering using state-of-the-art AI techniques.

With the **Soft Actor-Critic** (SAC) and **Proximal Policy Optimization** (PPO) algorithms, I tackled the complex planning problem. In it, the satellite should learn how to move around a simulated Earth and observe as many points of interest as possible while optimizing its energy consumption.

<section class="default-image-section">
<a href="/assets/gifs/demo.gif">
  <img 
    src="/assets/gifs/demo.gif" 
    alt="Demo GIF" 
    class="default-image"
  >
</a>
<em>Trained model (PPO + transformer encoder) during inference. Ansys STK12.</em>
</section>

In the previous .gif, one can see how the agent is looking at Earth all the time and always trying to hover over points of interest.

In addition, I focused on the comprehension of **transformer-based architectures**, given their adequacy to handle sequential data and long-range dependencies. These sort of models clearly outperformed traditional neural nets in my case of study.

The results demonstrated the potential of using advanced reinforcement learning techniques for real-world satellite operations, paving the way for more efficient, intelligent and reactive Earth observation constellations.

Coding was in Python, with self-made [environment](https://github.com/GerardMR12/earth-gym.git) and Ansys STK12 (Texas A&M license) as orbit propagator. For ML tasks, PyTorch was [used](https://github.com/GerardMR12/ppo-eos.git).

# UPC ecoRacing

As a member of the [UPC ecoRacing](https://www.ecoracing.es/) Formula Student team, I contributed to the development of a high-performance electric race car. My main focus was on the design and implementation of the vehicle's aerodynamics, which are crucial for optimizing performance on the track.

My colleagues and I worked closely together to analyze and improve the car's aerodynamic properties using computer-aided design (CAD), computational fluid dynamics (CFD) simulations, carbon fiber reinforced polymers (CFRP) manufacturing and aerodynamic validation testing.

<section class="default-image-section">
<a href="/assets/img/ecoRD_22.jpg">
  <img 
    src="/assets/img/ecoRD_22.jpg" 
    alt="Demo GIF" 
    class="default-image"
  >
</a>
<em>The ecoRD 22 car at a competition circuit in 2022. UPC ecoRacing.</em>
</section>

The car of the image counts on very advanced full-package aerodynamics, including a recently made front wing with increased wake management and a triple-element rear wing with drag reduction system (DRS). Also, it can drive autonomously with the driverless system (DV).

We had a great experience participating in summer competitions like Formula Student Netherlands, Germany, East (Hungary) and Spain.