## Context

RamBros 3D showcases high-precision, open-source 3D printable mechanical engineering projects (Dragon Railway, Dragon R1, X470 Hydraulic Excavator). Project 30k represents a major step into mechatronics and robotics: a 45cm (1/4 scale), 36 Degrees of Freedom (DOF) humanoid robot. It pairs the beloved exterior aesthetics of Soozafone's DUMMY13 with high-density internal motor drives, custom gear trains, and embedded PCBs.

## Goals / Non-Goals

**Goals:**
- Create an aesthetically cohesive landing page at `src/pages/project30k/index.astro` using `LandingLayout.astro`.
- Present both the exterior shell and internal cutaway mechanics using the CAD renders in `public/images/project30k/`.
- Highlight technical specifications: 45 cm height, 1/4 scale, 36 DOF, embedded limb driver PCBs, geared elbows, multi-axis hips and ankles.
- Credit the DUMMY13 open-source inspiration.
- Add Project 30k to the homepage Featured Models grid in `src/pages/index.astro`.

**Non-Goals:**
- Full Starlight documentation site (Starlight docs can be added separately in a future change if assembly guides or BOM are published).
- Heavy client-side JavaScript or interactive 3D WebGL viewer (per site principles: lightweight HTML/CSS static-first).

## Decisions

- **Layout & Typography**: Use `LandingLayout.astro` with existing site fonts (`Belanosima` for headings, `Changa` for badges/stats, `Inter` for body) to ensure brand consistency with `/r1/` and `/x470/`.
- **Image Referencing**: Serve images directly from `/images/project30k/` via standard HTML `<img>` with lazy loading and responsive Tailwind classes, matching `src/pages/r1/` and `src/pages/x470/`.
- **Content Organization**:
  1. *Hero*: Cutaway render (`Humanoid Front.png`) with title, subtitle, and badges.
  2. *Quick Stats*: 45cm Height, 1/4 Scale, 36 DOF, Fully 3D Printed Chassis & Shell.
  3. *Mechatronic Architecture*: Explaining the integration of micro coreless/gearmotors and planetary/spur reduction.
  4. *Subsystem Deep-Dive*:
     - Upper Body: Geared elbow mechanism (`Arm Front.png`, `Arm Rear.png`), shoulder pan/tilt.
     - Locomotion & Lower Body: Pelvic yaw, multi-axis hips, embedded shin/thigh motor drivers, active ankles (`Legs.png`, `Legs Front.png`).
  5. *Lineage & Attribution*: DUMMY13 / Soozafone acknowledgment.
- **Homepage Grid**: Add a 4th card to `src/pages/index.astro` in the "Featured Models" section (updating grid layout from `grid-cols-1 sm:grid-cols-3` to `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` or clean responsive 4-column layout).

## Risks / Trade-offs

- [Risk] Image filenames in `public/images/project30k/` contain spaces (e.g., `Humanoid Front.png`).
  → *Mitigation*: URL-encode paths or use clean string escaping (`/images/project30k/Humanoid%20Front.png` or `/images/project30k/Humanoid Front.png` standard in Astro).
- [Risk] Large PNG images could slow initial page load.
  → *Mitigation*: Use `loading="lazy"` on below-the-fold images and keep markup lightweight.
