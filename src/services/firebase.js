import { firebase, FieldValue } from '../lib/firebase';

const db = firebase.firestore();

/* START - RULES */
export async function getRules() {
  const data = [];
  await db
    .collection('rules')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
    });

  return data;
}

export async function addRule(rule) {}

export async function editRule(rule) {}

export async function deleteRule(rule) {}
/* END - RULES */

/* START - MEMBERS */
export async function getMembers() {
  const data = [];
  await db
    .collection('members')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
    });

  return data;
}

export async function addMember(member) {}

export async function editMember(member) {}

export async function deleteMember(member) {}
/* END - MEMBERS */

/* START -  NEWS*/
export async function getNews() {}

export async function addNews(news) {}

export async function editNews(news) {}

export async function deleteNews(news) {}
/* END - NEWS */

/* START - COMPLAINTS */
export async function getComplaints() {}

export async function addComplaint(complaint) {}
/* END - COMPLAINTS */
