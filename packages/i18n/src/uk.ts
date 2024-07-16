import type { Language } from './types';

// prettier-ignore
const language: Language = {
  code:             'uk',
  schema:           (issue) => `Неправильний тип: очікувався ${issue.expected}, але отримано ${issue.received}`,
  specific: {
    bic:            (issue) => `Неправильний BIC: отримано ${issue.received}`,
    bytes:          (issue) => `Неправильна кількість байт: очікувалося ${issue.expected}, але отримано ${issue.received}`,
    check:          (issue) => `Неправильні дані: отримано ${issue.received}`,
    checkAsync:     (issue) => `Неправильні дані: отримано ${issue.received}`,
    creditCard:     (issue) => `Неправильний номер кредитної картки: отримано ${issue.received}`,
    cuid2:          (issue) => `Неправильний Cuid2: отримано ${issue.received}`,
    decimal:        (issue) => `Неправильне десяткове число: отримано ${issue.received}`,
    email:          (issue) => `Неправильний email: отримано ${issue.received}`,
    emoji:          (issue) => `Неправильні емодзі: отримано ${issue.received}`,
    empty:          (issue) => `Неправильна довжина: очікувалося ${issue.expected}, але отримано ${issue.received}`,
    endsWith:       (issue) => `Неправильний кінець: очікувалося ${issue.expected}, але отримано ${issue.received}`,
    excludes:       (issue) => `Неправильний вміст: очікувалося ${issue.expected}, але отримано ${issue.received}`,
    finite:         (issue) => `Неправильне скінченне число: отримано ${issue.received}`,
    hash:           (issue) => `Неправильний хеш: отримано ${issue.received}`,
    hexColor:       (issue) => `Неправильний шістнадцятковий колір: отримано ${issue.received}`,
    hexadecimal:    (issue) => `Неправильне шістнадцяткове значення: отримано ${issue.received}`,
    imei:           (issue) => `Неправильний IMEI: отримано ${issue.received}`,
    includes:       (issue) => `Неправильний вміст: очікувалося ${issue.expected}, але отримано ${issue.received}`,
    integer:        (issue) => `Неправильне ціле число: отримано ${issue.received}`,
    ip:             (issue) => `Неправильний IP: отримано ${issue.received}`,
    ipv4:           (issue) => `Неправильний IPv4: отримано ${issue.received}`,
    ipv6:           (issue) => `Неправильний IPv6: отримано ${issue.received}`,
    isoDate:        (issue) => `Неправильна дата: отримано ${issue.received}`,
    isoDateTime:    (issue) => `Неправильна дата і час: отримано ${issue.received}`,
    isoTime:        (issue) => `Неправильний час: отримано ${issue.received}`,
    isoTimeSecond:  (issue) => `Неправильний час з секундами: отримано ${issue.received}`,
    isoTimestamp:   (issue) => `Неправильна мітка часу: отримано ${issue.received}`,
    isoWeek:        (issue) => `Неправильний тиждень: отримано ${issue.received}`,
    length:         (issue) => `Неправильна довжина: очікувалося ${issue.expected}, але отримано ${issue.received}`,
    mac:            (issue) => `Неправильний MAC: отримано ${issue.received}`,
    mac48:          (issue) => `Неправильний 48-бітний MAC: отримано ${issue.received}`,
    mac64:          (issue) => `Неправильний 64-бітний MAC: отримано ${issue.received}`,
    maxBytes:       (issue) => `Неправильна кількість байт: очікувалося ${issue.expected}, але отримано ${issue.received}`,
    maxLength:      (issue) => `Неправильна довжина: очікувалося ${issue.expected}, але отримано ${issue.received}`,
    maxSize:        (issue) => `Неправильний розмір: очікувалося ${issue.expected}, але отримано ${issue.received}`,
    maxValue:       (issue) => `Неправильне значення: очікувалося ${issue.expected}, але отримано ${issue.received}`,
    mimeType:       (issue) => `Неправильний MIME тип: очікувався ${issue.expected}, але отримано ${issue.received}`,
    minBytes:       (issue) => `Неправильна кількість байт: очікувалося ${issue.expected}, але отримано ${issue.received}`,
    minLength:      (issue) => `Неправильна довжина: очікувалося ${issue.expected}, але отримано ${issue.received}`,
    minSize:        (issue) => `Неправильний розмір: очікувалося ${issue.expected}, але отримано ${issue.received}`,
    minValue:       (issue) => `Неправильне значення: очікувалося ${issue.expected}, але отримано ${issue.received}`,
    multipleOf:     (issue) => `Неправильне кратне число: очікувалося ${issue.expected}, але отримано ${issue.received}`,
    nonEmpty:       (issue) => `Неправильна довжина: очікувалося ${issue.expected}, але отримано ${issue.received}`,
    notBytes:       (issue) => `Неправильна кількість байт: очікувалося ${issue.expected}, але отримано ${issue.received}`,
    notLength:      (issue) => `Неправильна довжина: очікувалося ${issue.expected}, але отримано ${issue.received}`,
    notSize:        (issue) => `Неправильний розмір: очікувалося ${issue.expected}, але отримано ${issue.received}`,
    notValue:       (issue) => `Неправильне значення: очікувалося ${issue.expected}, але отримано ${issue.received}`,
    octal:          (issue) => `Неправильний вісімковий код: отримано ${issue.received}`,
    regex:          (issue) => `Неправильний формат: очікувалося ${issue.expected}, але отримано ${issue.received}`,
    safeInteger:    (issue) => `Неправильне безпечне ціле число: отримано ${issue.received}`,
    size:           (issue) => `Неправильний розмір: очікувалося ${issue.expected}, але отримано ${issue.received}`,
    startsWith:     (issue) => `Неправильний початок: очікувалося ${issue.expected}, але отримано ${issue.received}`,
    ulid:           (issue) => `Неправильний ULID: отримано ${issue.received}`,
    url:            (issue) => `Неправильний URL: отримано ${issue.received}`,
    uuid:           (issue) => `Неправильний UUID: отримано ${issue.received}`,
    value:          (issue) => `Неправильне значення: очікувалося ${issue.expected}, але отримано ${issue.received}`,
  },
};

export default language;
