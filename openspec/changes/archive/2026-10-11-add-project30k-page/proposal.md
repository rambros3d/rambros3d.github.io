## Why

RamBros 3D has developed Project 30k — an ambitious 1/4 scale (45cm tall), 36 Degrees of Freedom (DOF) fully motorized and actuated humanoid robot built inside the popular DUMMY13 3D printable armor architecture. Adding a dedicated showcase page and featuring it on the homepage enables visitors to discover the engineering, internal mechatronics, and 3D printing details of this project.

## What Changes

- Add a new dedicated project showcase page at `src/pages/project30k/index.astro` using `LandingLayout.astro`.
- Showcase high-resolution cutaway and subsystem CAD renders from `public/images/project30k/`.
- Present key specifications: 45cm height (1/4 scale), 36 DOF, micro coreless/gearmotors, custom gear trains, and limb-integrated PCBs.
- Highlight the engineering breakdown: upper body / arm mechanics and lower body / locomotion drivetrain.
- Attribute the exterior armor design lineage to Soozafone's DUMMY13 open-source model.
- Update `src/pages/index.astro` to feature Project 30k in the "Featured Models" grid.

## Capabilities

### New Capabilities
- `project30k-showcase`: Dedicated showcase page at `/project30k/` and homepage featured card for Project 30k humanoid robot.

### Modified Capabilities
*(None - no requirement changes to existing specs)*

## Impact

- Adds new route: `/project30k/` (`src/pages/project30k/index.astro`).
- Modifies `src/pages/index.astro` to link to `/project30k/`.
- Utilizes assets in `public/images/project30k/`.
- Follows existing styling conventions (Tailwind v4, DaisyUI, Belanosima and Changa typography).
