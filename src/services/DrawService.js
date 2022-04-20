export default function DrawService() {
  const getData = async () => {
    const data = [
      { id: 1, name: 'Петя', date: '01-01-2000', value: 12 },
      { id: 6, name: 'Вася', date: '06-01-2000', value: 16 },
      { id: 3, name: 'Петя', date: '03-02-2000', value: 25 },
      { id: 8, name: 'Саша', date: '08-01-2000', value: 27 },
      { id: 3, name: 'Петя', date: '04-01-2000', value: 0 },
      { id: 5, name: 'Вася', date: '05-01-2000', value: 23 },
      { id: 9, name: 'Саша', date: '09-01-2000', value: 18 },
      { id: 4, name: 'Вася', date: '04-01-2000', value: 13 },
      { id: 2, name: 'Петя', date: '02-01-2000', value: 21 },
      { id: 17, name: 'Саша', date: '04-02-2000', value: 17 },
      { id: 18, name: 'Вера', date: '05-03-2000', value: 6 },
      { id: 19, name: 'Вера', date: '06-04-2000', value: 15 },
      { id: 20, name: 'Вера', date: '07-05-2000', value: 2 },
      { id: 21, name: 'Вера', date: '08-06-2000', value: 13 },
      { id: 22, name: 'Вера', date: '09-07-2000', value: 8 },
    ]

    return data;
  }

  return { getData };
}