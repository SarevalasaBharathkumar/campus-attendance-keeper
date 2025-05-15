
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

export interface Student {
  id: number;
  admissionNumber: string;
  name: string;
  attendance: 'Absent' | 'MorningPresent' | 'AfternoonPresent' | 'DayPresent';
}

interface AttendanceTableProps {
  students: Student[];
  date: Date;
  classInfo: string;
  section: string;
}

const AttendanceTable: React.FC<AttendanceTableProps> = ({ students, date, classInfo, section }) => {
  const [studentsAttendance, setStudentsAttendance] = useState<Student[]>(students);
  
  const handleAttendanceChange = (studentId: number, value: 'Absent' | 'MorningPresent' | 'AfternoonPresent' | 'DayPresent') => {
    setStudentsAttendance(prevState => 
      prevState.map(student => 
        student.id === studentId ? { ...student, attendance: value } : student
      )
    );
  };

  const handleSave = () => {
    // Mock API call to save attendance data
    console.log('Saving attendance data:', {
      date,
      class: classInfo,
      section,
      students: studentsAttendance
    });
    
    toast.success('Attendance saved successfully!');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Students Attendance: {classInfo} - Section {section}
        </h2>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3">S.No</th>
              <th className="px-6 py-3">Admission Number</th>
              <th className="px-6 py-3">Student Name</th>
              <th className="px-6 py-3">Attendance</th>
            </tr>
          </thead>
          <tbody>
            {studentsAttendance.map((student, index) => (
              <tr 
                key={student.id} 
                className="bg-white border-b hover:bg-gray-50"
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{student.admissionNumber}</td>
                <td className="px-6 py-4">{student.name}</td>
                <td className="px-6 py-4">
                  <Select 
                    value={student.attendance} 
                    onValueChange={(value: 'Absent' | 'MorningPresent' | 'AfternoonPresent' | 'DayPresent') => 
                      handleAttendanceChange(student.id, value)
                    }
                  >
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Select attendance" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Absent">Absent</SelectItem>
                      <SelectItem value="MorningPresent">Morning Present</SelectItem>
                      <SelectItem value="AfternoonPresent">Afternoon Present</SelectItem>
                      <SelectItem value="DayPresent">Day Present</SelectItem>
                    </SelectContent>
                  </Select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 flex justify-end">
        <Button onClick={handleSave}>Save</Button>
      </div>
    </div>
  );
};

export default AttendanceTable;
