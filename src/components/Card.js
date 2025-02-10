// src/components/ui/Card.js

import React from 'react';

export const Card = ({ children }) => (
  <div className="bg-white shadow-md rounded-lg p-4">
    {children}
  </div>
);

export const CardHeader = ({ children }) => (
  <div className="border-b pb-2 mb-2">
    {children}
  </div>
);

export const CardTitle = ({ children }) => (
  <h3 className="text-lg font-semibold">
    {children}
  </h3>
);

export const CardContent = ({ children }) => (
  <div>
    {children}
  </div>
);