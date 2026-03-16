# Degree thesis

My thesis with Dr. Selva at Texas A&M, called [Earth Observation Satellite Planning Problem with Deep Reinforcement Learning and Transformers](assets/files/Degree-Thesis-GerardMR.pdf), focused on developing advanced algorithms to optimize the planning of Earth climate monitoring satellites using state-of-the-art AI techniques.

With the **Soft Actor-Critic** (SAC) and **Proximal Policy Optimization** (PPO) algorithms, I tackled the complex planning problem. In it, the satellite should learn how to move around a simulated Earth and observe as many points of interest as possible while optimizing its energy consumption. These points of interest were defined based on real climate data, such as areas with high temperatures or significant vegetation changes, algal blooms, flash floods and other environmental factors.

![Demo GIF](assets/img/demo.gif)
*Trained model (PPO + transformer encoder) during inference. Ansys STK12.*

In the previous .gif, one can see how the agent is looking at Earth all the time and always trying to hover over the points of interest.

In addition, I focused on the comprehension of **transformer-based architectures**, given their adequacy to handle sequential data and long-range dependencies. These sort of models clearly outperformed traditional neural nets in my case of study.

The results demonstrated the potential of using advanced reinforcement learning techniques for real-world satellite operations, paving the way for more efficient, intelligent and reactive Earth observation constellations.

Coding was in Python, with self-made [environment](https://github.com/GerardMR12/earth-gym.git) and Ansys STK12 (Texas A&M license) as orbit propagator. For ML tasks, PyTorch was [used](https://github.com/GerardMR12/ppo-eos.git).
