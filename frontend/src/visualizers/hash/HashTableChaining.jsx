import React from 'react';
import { HelpCircle, Lightbulb } from 'lucide-react';
import AIAssistant from '../../components/AIAssistant';
import CodeTabs from '../../components/CodeTabs';
import MessageBanner from '../../components/MessageBanner';
import { getJson, postJson } from '../../api/api';
import { useTimedMessage } from '../../components/js-components/useTimedMessage';

function HashTableChaining() {
  const [table, setTable] = useState([]);
  const [size, setSize] = useState(0);
  const [capacity, setCapacity] = useState(0);
  const [loadFactor, setLoadFactor] = useState(0);
  const [collisionCount, setCollisionCount] = useState(0);
  const { message, showMessage } = useTimedMessage(3000);
  const [insertKey, setInsertKey] = useState('');
  const [insertValue, setInsertValue] = useState('');
  const [deleteKey, setDeleteKey] = useState('');
  const [getKey, setGetKey] = useState('');
  const [highlightedSlots, setHighlightedSlots] = useState([]);
  
  useEffect(() => {
    loadHashtable();
  }, []);

  const loadHashtable = async () => {
 try {
       const data = await getJson('/api/hashtable_chaining');
       setTable(data.table || []);
       setSize(data.size || 0);
       setCapacity(data.capacity || 0);
       setLoadFactor(data.load_factor || 0);
       setCollisionCount(data.collision_count || 0);
     } catch (error) {
       console.error('Error loading hashtable:', error);
     }
  };

  const insertItem = async () => {
    if( !insertKey.trim() || !insertValue.trim() ) {
      showMessage('Please enter both key and value!', 'error');
      return;
    }

    try {
      const result = await postJson('/api/hashtable_chaining/insert', { key: insertKey.trim(), value: insertValue.trim() });
    
    if( result.error ) {
      showMessage(result.error, 'error');
      return;
    }
    await loadHashtable();
    showMessage(`Inserted "${insertKey}" → slot ${result.index}`, 'success');
    setInsertKey('');
    setInsertValue('');
    } 
    catch (error) {
      showMessage('Error inserting. Is Flask running?', 'error');
    }
  };

  return (
    <div>
      <h1>Hash Table Chaining</h1>
    </div>
  );
}
export default HashTableChaining;