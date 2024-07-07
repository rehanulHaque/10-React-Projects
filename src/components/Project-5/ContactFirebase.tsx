import { FormEvent, useEffect, useState } from "react";
import { db } from "./config";
import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";

export default function ContactFirebase() {
    const [contactList, setContactList] = useState<{ name: string; email: string; id: string }[]>([]);
  const [addContact, setaAddContact] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [searchText, setSearchText] = useState("")

  const addContactList = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setaAddContact(false);
    try {
      const contactRef = collection(db, "contact");
      await addDoc(contactRef, { name, email });
      fetchContacts();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = async (id: string) => {
    try {
      await deleteDoc(doc(db, "contact", id));
      fetchContacts();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchContacts = async () => {
    try {
      const contactCollection = collection(db, "contact");
      const contactSnapshot = await getDocs(contactCollection);
      const contactList = contactSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as { name: string; email: string; id: string }[];
      setContactList(contactList);
    } catch (error) {
      console.log(error);
    }
  };

  const handelSearch = () =>{
    setContactList(contactList.filter((contact) => contact.name.includes(searchText)))
  }

  useEffect(() => {
    fetchContacts();
  }, []);
  return (
    <main
      className="flex flex-col items-center justify-center h-full"
    >
      <div className="bg-green-600 p-4 w-full">
        <h1 className="font-bold text-lg">Firebase Contact</h1>
      </div>

      <div className="flex items-center gap-3 justify-center mt-3 relative">
        <input
          type="text"
          placeholder="Search Contact"
          className="border border-black px-4 py-2 rounded-md"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
        <button className="bg-blue-400 px-2 py-1" onClick={handelSearch}>Search</button>
        <button
          className="bg-blue-400 px-2 py-1"
          onClick={() => setaAddContact(!addContact)}
        >
          Add
        </button>
        {addContact && (
          <form
            onSubmit={addContactList}
            className="absolute bg-white p-10 top-20 border border-black flex gap-3 flex-col"
          >
            <input
              type="text"
              placeholder="Name"
              className="border border-black px-4 py-2 rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              className="border border-black px-4 py-2 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="bg-blue-400 px-2 py-1">Add</button>
          </form>
        )}
      </div>
      <div className="mt-4 flex gap-3 flex-col">
        {contactList.map((contact) => (
            <div className="flex gap-3 rounded-md px-4 py-1 border border-black" key={contact.id}>
            <div>
              <p>{contact.name}</p>
              <p>{contact.email}</p>
            </div>
            <div className="flex gap-3 items-center">
              <button className="bg-blue-400 px-2 py-1">E</button>
              <button className="bg-red-400 px-2 py-1" onClick={() => deleteContact(contact.id)}>X</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
