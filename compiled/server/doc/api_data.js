define({ "api": [
  {
    "type": "post",
    "url": "/api/addClient",
    "title": "",
    "name": "TransferWordlist",
    "group": "Client",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Master Token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Client name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Client password.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/server/api-server/client-api.ts",
    "groupTitle": "Client"
  },
  {
    "type": "post",
    "url": "/api/learn/addWordlistToStudent",
    "title": "",
    "name": "addWordlistToStudent",
    "group": "Learning",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "student",
            "description": "<p>Student id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "wordlist",
            "description": "<p>Wordlist to add.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/server/api-server/learning-api.ts",
    "groupTitle": "Learning"
  },
  {
    "type": "post",
    "url": "/api/learn/getMarked",
    "title": "",
    "name": "setWordlist",
    "group": "Learning",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "student",
            "description": "<p>Student id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/server/api-server/learning-api.ts",
    "groupTitle": "Learning"
  },
  {
    "type": "post",
    "url": "/api/deleteStudent",
    "title": "",
    "name": "Delete_Student",
    "group": "Student",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Client Token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Student ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Student",
            "optional": false,
            "field": "Deleted",
            "description": "<p>Student Object.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/server/api-server/student-api.ts",
    "groupTitle": "Student"
  },
  {
    "type": "post",
    "url": "/api/renameStudent",
    "title": "",
    "name": "Rename_Student",
    "group": "Student",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Client Token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Student ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Student new name.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Student",
            "optional": false,
            "field": "Student",
            "description": "<p>Obj.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/server/api-server/student-api.ts",
    "groupTitle": "Student"
  },
  {
    "type": "post",
    "url": "/api/addStudent",
    "title": "",
    "name": "{Add_Student}",
    "group": "Student",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Client Token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Student unique name.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Student",
            "optional": false,
            "field": "Student",
            "description": "<p>Obj.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/server/api-server/student-api.ts",
    "groupTitle": "Student"
  },
  {
    "type": "post",
    "url": "/api/createWordlist",
    "title": "",
    "name": "CreateWordlist",
    "group": "Wordlist",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Client Token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Wordlist name.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/server/api-server/wordlist-api.ts",
    "groupTitle": "Wordlist"
  },
  {
    "type": "post",
    "url": "/api/deleteWordlist",
    "title": "",
    "name": "DelateWordlist",
    "group": "Wordlist",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Client Token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "wordlist",
            "description": "<p>Wordlist ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/server/api-server/wordlist-api.ts",
    "groupTitle": "Wordlist"
  },
  {
    "type": "post",
    "url": "/api/renameWordlist",
    "title": "",
    "name": "RenameWordlist",
    "group": "Wordlist",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Client Token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "wordlist",
            "description": "<p>Wordlist ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Wordlist new name.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/server/api-server/wordlist-api.ts",
    "groupTitle": "Wordlist"
  },
  {
    "type": "post",
    "url": "/api/transferWordlist",
    "title": "",
    "name": "TransferWordlist",
    "group": "Wordlist",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Client Token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>new owner ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "wordlist",
            "description": "<p>Wordlist ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/server/api-server/wordlist-api.ts",
    "groupTitle": "Wordlist"
  },
  {
    "type": "post",
    "url": "/api/addWordsToWordlist",
    "title": "",
    "name": "TransferWordlist",
    "group": "Wordlist",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Client Token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "words",
            "description": "<p>stringfied word array</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "wordlist",
            "description": "<p>Wordlist ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/server/api-server/wordlist-api.ts",
    "groupTitle": "Wordlist"
  },
  {
    "type": "post",
    "url": "/api/removeWordFromWordlist",
    "title": "",
    "name": "TransferWordlist",
    "group": "Wordlist",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Client Token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "words",
            "description": "<p>stringfied word array</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "wordlist",
            "description": "<p>Wordlist ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/server/api-server/wordlist-api.ts",
    "groupTitle": "Wordlist"
  }
] });
