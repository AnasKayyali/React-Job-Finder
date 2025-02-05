import { create } from 'zustand'
export const useStore = create(
  (set) => ({
  name: '',
  name2: '',
  location: '',
  location2: '',
  salary: '',
  text:'',
  text2:'',
  item: localStorage.getItem("loginInfo"),
  changeName: (name) => {
    set({ name })
  },
  changeName2: (name2) => {
    set({ name2 })
  },
  changeLocation: (location) => {
    set({ location })
  }, 
  changeLocation2: (location2) => {
    set({ location2 })
  }, 
  changeSalary: (salary) => {
    set({ salary })
  }, 
  changeText: (text) => {
    set({ text })
  },
  changeText2: (text2) => {
    set({ text2 })
  }, 
  setItem: (value) => {
    set({item : value})
  },
  })
);
