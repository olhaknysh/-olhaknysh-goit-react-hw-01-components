import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/Transaction/TransactionHistory';
import Container from './components/Container/Container';

import user from './data/user.json';
import transactions from './data/transactions.json';
import coloredStatisticalData from './components/Statistics/colored-data';
import friends from './data/friends.json';

const App = () => {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={coloredStatisticalData} />
      <Statistics stats={coloredStatisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Container>
  );
};

export default App;
