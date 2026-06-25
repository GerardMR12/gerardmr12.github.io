During my time as Project Lead at CIMNE, I enjoyed working on a project to deliver a flight mechanics software product to an aerospace company.

The program is an optimized trajectory generated based on a set of user demands and constraints. It is generalized for any type of fixed-wing aircraft, although mainly focused on large drones. And the project's focus use case is for wildfire extinguishing missions.

It is a very complex piece of software, which counts on several solution scenarios that range from lightning fast analytical solutions to highly accurate optimized ones. The user has an immense (although not overwhelming) amount of features and options to consider, and it tops on compute speeds of a few seconds for the most extreme scenarios.

![results](assets/img/st_boi_nfz.png)
*Top view of a region with a No-Fly Zone.*

Accuracy is key, so it even considers climate data to find the path from start to end. Wind data is tightly integrated within the governing equations of the system dynamics.

Maneuverability is aircraft-dependent. Therefore, a very precise model of the flight mechanics is needed in order to compute the solution based on the airplane's capabilities. One example is turn radius, which is quite a limiting factor.

| ![wind](assets/img/wind_mms.png) | ![flappy](assets/img/flappy_nfz.png) |
|---------------------|---------------------|

*To the left, a scenario with wind at different altitudes.*
*To the right, path solved analytically and optimized afterwards.*

The resulting metrics were impressive, and the achieved base is far more than we had expected. Yet, there are still a few tweaks to be continued to make the engine an extremely advanced tool for mission management.