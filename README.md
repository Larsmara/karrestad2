# Karrestad 2 borettslags side

## Informasjonsside til beboere.

- Telefonnummer styret
- Kontortid
- Medlemmer
- Klagemulighet direkte til styret
- Ordensregler

## For styret

- Oversikt over innkommende saker
  - Mulighet til å behandle saker
- Redigering:
  - Styreinfo
  - Ordensregler

# Teknologi

### React

React context for global state management

### Database

Firebase

- Firestore
- Storage
- Firebase authentication

Database modell

---

| Collection | doc                             | type                                |
| ---------- | ------------------------------- | ----------------------------------- |
| complaints | id name date text number editBy | guid string date string string guid |
| members    | id name date position           | guid string date string             |
| rules      | text                            | array                               |

### UI

- Chakra UI
- Font: Google font - Crimson Text
- Color palette:
  - Primary: Teal 400
  - Secondary: Blue 400
  - Accent: Blue 200

### Routing

- react-router-dom
- Protected routes:
  - Portal
  - Edit-info

## Wireframes

### Landing page

![Landing page]("./assets/wireframes/Landing.png")
