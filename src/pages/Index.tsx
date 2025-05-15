
import React, { useState } from 'react';
import Header from '../components/Header';
import AttendanceForm from '../components/AttendanceForm';
import AttendanceTable from '../components/AttendanceTable';
import { format } from 'date-fns';

// Mock student data
const mockStudentData = [
  { id: 1, admissionNumber: 'A001', name: 'John Smith', attendance: 'DayPresent' as const },
  { id: 2, admissionNumber: 'A002', name: 'Emma Johnson', attendance: 'DayPresent' as const },
  { id: 3, admissionNumber: 'A003', name: 'Michael Williams', attendance: 'DayPresent' as const },
  { id: 4, admissionNumber: 'A004', name: 'Olivia Brown', attendance: 'DayPresent' as const },
  { id: 5, admissionNumber: 'A005', name: 'William Jones', attendance: 'DayPresent' as const },
  { id: 6, admissionNumber: 'A006', name: 'Sophia Garcia', attendance: 'DayPresent' as const },
  { id: 7, admissionNumber: 'A007', name: 'James Miller', attendance: 'DayPresent' as const },
  { id: 8, admissionNumber: 'A008', name: 'Charlotte Davis', attendance: 'DayPresent' as const },
  { id: 9, admissionNumber: 'A009', name: 'Benjamin Wilson', attendance: 'DayPresent' as const },
  { id: 10, admissionNumber: 'A010', name: 'Amelia Martinez', attendance: 'DayPresent' as const },
];

const Index: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState<string>('');
  const [selectedSection, setSelectedSection] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [students, setStudents] = useState<Array<{
    id: number;
    admissionNumber: string;
    name: string;
    attendance: 'Absent' | 'MorningPresent' | 'AfternoonPresent' | 'DayPresent';
  }>>([]);
  const [showTable, setShowTable] = useState<boolean>(false);

  const handleFetchStudents = (classId: string, section: string, date: Date) => {
    // In a real application, this would make an API call
    // For the demo, we'll use the mock data
    console.log(`Fetching students for ${classId} - Section ${section} on ${format(date, 'yyyy-MM-dd')}`);
    
    setSelectedClass(classId);
    setSelectedSection(section);
    setSelectedDate(date);
    setStudents(mockStudentData);
    setShowTable(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Attendance Management</h1>
        
        <AttendanceForm onFetchStudents={handleFetchStudents} />
        
        {showTable && selectedDate && (
          <AttendanceTable 
            students={students} 
            date={selectedDate} 
            classInfo={selectedClass}
            section={selectedSection}
          />
        )}
      </main>
      
      <footer className="bg-gray-100 text-center py-4 text-sm text-gray-600">
        <p>© 2025 Campus Attendance Keeper. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
