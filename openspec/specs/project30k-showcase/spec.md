# project30k-showcase Specification

## Purpose
TBD - created by archiving change add-project30k-page. Update Purpose after archive.
## Requirements
### Requirement: Standalone Project 30k Showcase Page
The website SHALL provide a standalone project showcase page at route `/project30k/` built using `LandingLayout.astro`.

#### Scenario: User visits /project30k/
- **WHEN** a user navigates to `/project30k/`
- **THEN** the browser displays the Project 30k hero section, key specifications (45cm height, 1/4 scale, 36 DOF), cutaway renders, and mechatronic breakdown.

### Requirement: Mechatronic Subsystem Visuals and Content
The Project 30k page SHALL showcase the internal robotics architecture using the renders in `/images/project30k/` with detailed explanations of the upper body (arm gear train) and lower body (locomotion, pelvis, embedded limb PCBs).

#### Scenario: User inspects subsystem sections
- **WHEN** a user scrolls through the page
- **THEN** high-resolution images of the arm actuation (`Arm Front.png`, `Arm Rear.png`) and leg locomotion (`Legs.png`, `Legs Front.png`, `Leg Front.png`) are presented with descriptive architectural callouts.

### Requirement: Lineage and Open-Source Attribution
The Project 30k page SHALL acknowledge the exterior armor design lineage from Soozafone's open-source DUMMY13 model.

#### Scenario: User reads attribution
- **WHEN** a user reaches the design lineage section
- **THEN** clear credit and link to DUMMY13 / Lucky 13 Toys are provided alongside RamBros mechatronic engineering details.

### Requirement: Homepage Featured Models Integration
The homepage (`src/pages/index.astro`) SHALL feature Project 30k in the "Featured Models" grid alongside existing models.

#### Scenario: User navigates from homepage
- **WHEN** a user views the Featured Models section on `/`
- **THEN** a card for Project 30k is displayed with thumbnail, title, brief description, and a link pointing to `/project30k/`.

