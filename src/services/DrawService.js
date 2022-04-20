export default function DrawService() {
  const getData = async () => {
    const data = [
      { id: 1, name: 'Петя', date: '2000-01-01', value: 12 },
      { id: 6, name: 'Вася', date: '2000-06-01', value: 16 },
      { id: 3, name: 'Петя', date: '2000-03-02', value: 25 },
      { id: 8, name: 'Саша', date: '2000-08-01', value: 27 },
      { id: 3, name: 'Петя', date: '2000-04-01', value: 0 },
      { id: 5, name: 'Вася', date: '2000-05-01', value: 23 },
      { id: 9, name: 'Саша', date: '2000-09-01', value: 18 },
      { id: 4, name: 'Вася', date: '2000-04-01', value: 13 },
      { id: 2, name: 'Петя', date: '2000-02-01', value: 21 },
      { id: 17, name: 'Саша', date: '2000-04-02', value: 17 },
      { id: 18, name: 'Вера', date: '2000-05-03', value: 6 },
      { id: 19, name: 'Вера', date: '2000-06-04', value: 15 },
      { id: 20, name: 'Вера', date: '2000-07-05', value: 2 },
      { id: 21, name: 'Вера', date: '2000-08-06', value: 13 },
      { id: 22, name: 'Вера', date: '2000-09-07', value: 8 },
    ]

    return data;
  }

  return { getData };
}