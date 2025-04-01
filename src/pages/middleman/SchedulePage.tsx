
import React from 'react';
import { NavBar } from "@/components/NavBar";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, ArrowLeft, Clock, Plus, Video, Phone, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";

interface Appointment {
  id: string;
  title: string;
  date: Date;
  time: string;
  duration: string;
  type: 'video' | 'call' | 'in-person';
  parties: string[];
  status: 'upcoming' | 'completed' | 'cancelled';
}

const SchedulePage = () => {
  const navigate = useNavigate();
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  
  const appointments: Appointment[] = [
    {
      id: '1',
      title: 'Dispute Resolution - Order #12345',
      date: new Date(2023, 10, 20, 10, 0),
      time: '10:00 AM',
      duration: '30 min',
      type: 'video',
      parties: ['John Smith (Buyer)', 'Tech Shop Inc. (Seller)'],
      status: 'upcoming'
    },
    {
      id: '2',
      title: 'Contract Review - Sale Agreement',
      date: new Date(2023, 10, 20, 13, 30),
      time: '1:30 PM',
      duration: '45 min',
      type: 'call',
      parties: ['Sarah Johnson (Buyer)', 'Home Goods Store (Seller)'],
      status: 'upcoming'
    },
    {
      id: '3',
      title: 'Final Inspection - Furniture Delivery',
      date: new Date(2023, 10, 21, 15, 0),
      time: '3:00 PM',
      duration: '1 hour',
      type: 'in-person',
      parties: ['Michael Brown (Buyer)', 'Furniture Outlet (Seller)'],
      status: 'upcoming'
    },
    {
      id: '4',
      title: 'Payment Verification - Jewelry Purchase',
      date: new Date(2023, 10, 18, 11, 0),
      time: '11:00 AM',
      duration: '20 min',
      type: 'video',
      parties: ['Emma Wilson (Buyer)', 'Luxury Jewelers (Seller)'],
      status: 'completed'
    }
  ];

  const handleGoBack = () => {
    navigate('/dashboard/middleman');
  };

  const getAppointmentTypeIcon = (type: Appointment['type']) => {
    switch (type) {
      case 'video': return <Video className="h-4 w-4 text-blue-600" />;
      case 'call': return <Phone className="h-4 w-4 text-green-600" />;
      case 'in-person': return <Users className="h-4 w-4 text-purple-600" />;
      default: return null;
    }
  };

  const getAppointmentTypeText = (type: Appointment['type']) => {
    switch (type) {
      case 'video': return <span className="text-blue-600">Video Call</span>;
      case 'call': return <span className="text-green-600">Phone Call</span>;
      case 'in-person': return <span className="text-purple-600">In-Person</span>;
      default: return <span>Unknown</span>;
    }
  };

  const getStatusBadge = (status: Appointment['status']) => {
    switch (status) {
      case 'upcoming': return <Badge className="bg-blue-100 text-blue-800">Upcoming</Badge>;
      case 'completed': return <Badge className="bg-green-100 text-green-800">Completed</Badge>;
      case 'cancelled': return <Badge className="bg-red-100 text-red-800">Cancelled</Badge>;
      default: return <Badge>Unknown</Badge>;
    }
  };

  // Filter appointments for the selected date
  const selectedDateAppointments = appointments.filter(appointment => 
    date && 
    appointment.date.getDate() === date.getDate() && 
    appointment.date.getMonth() === date.getMonth() && 
    appointment.date.getFullYear() === date.getFullYear()
  );

  return (
    <div className="page-container">
      <NavBar userType="middleman" />
      <main className="flex-1 bg-purple-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Button variant="ghost" onClick={handleGoBack} className="mr-2">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <h1 className="text-3xl font-bold">Schedule</h1>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Appointment
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle>Calendar</CardTitle>
                <CardDescription>
                  Select a date to view appointments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="border rounded-md"
                />
              </CardContent>
            </Card>

            <Card className="lg:col-span-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>
                      Appointments for {date?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                    </CardTitle>
                    <CardDescription>
                      Manage your scheduled meetings and calls
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {selectedDateAppointments.length === 0 ? (
                  <div className="text-center py-12">
                    <CalendarIcon className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-500">No appointments scheduled for this date</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {selectedDateAppointments.map((appointment) => (
                      <Card key={appointment.id} className="hover:shadow-md transition-shadow">
                        <div className="p-4">
                          <div className="flex justify-between items-start mb-3">
                            <h3 className="font-bold text-lg">{appointment.title}</h3>
                            {getStatusBadge(appointment.status)}
                          </div>
                          
                          <div className="flex items-center text-gray-600 mb-2">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>{appointment.time} ({appointment.duration})</span>
                          </div>
                          
                          <div className="flex items-center text-gray-600 mb-3">
                            {getAppointmentTypeIcon(appointment.type)}
                            <span className="ml-2">{getAppointmentTypeText(appointment.type)}</span>
                          </div>
                          
                          <div className="border-t pt-3 mt-3">
                            <p className="text-sm font-medium mb-2">Participants:</p>
                            <ul className="text-sm text-gray-600">
                              {appointment.parties.map((party, index) => (
                                <li key={index} className="mb-1">{party}</li>
                              ))}
                            </ul>
                          </div>
                          
                          {appointment.status === 'upcoming' && (
                            <div className="flex gap-2 mt-4">
                              {appointment.type === 'video' && (
                                <Button className="bg-blue-600 hover:bg-blue-700">
                                  <Video className="h-4 w-4 mr-2" />
                                  Join Video Call
                                </Button>
                              )}
                              <Button variant="outline">Reschedule</Button>
                              <Button variant="outline" className="text-red-600">Cancel</Button>
                            </div>
                          )}
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <footer className="bg-gray-100 py-4 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} MultiPortal. All rights reserved.
      </footer>
    </div>
  );
};

export default SchedulePage;
