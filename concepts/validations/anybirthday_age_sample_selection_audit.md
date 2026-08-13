# AnyBirthday age-sample selection audit

## Summary

AnyBirthday age-sample selection audit checks whether an externally birthdate-matched inventor subset differs from the full patent-inventor population before using it to measure age at first invention.

## Canonical Form

- Unit of analysis: inventor, birthdate match, zip-code match, assignment status, patent history, or age-estimation sample.
- Typical representation: matched-versus-unmatched comparison and sensitivity checks for age-trend estimates.
- Validation target: assess selection bias in external demographic enrichment of patent data.
- Empirical signature: age-at-first-invention results are interpreted with evidence on how birthdate-matched inventors differ from unmatched inventors.

## Uses in Science of Science

- Validates [inventor birthdate matching panel](../datasets/inventor_birthdate_matching_panel.md) and [age at first invention](../measures/age_at_first_invention.md).
- Connects patent demographic enrichment to broader [evaluated-party data verification](evaluated_party_data_verification.md) and record-linkage bias concerns.
- Provides a reusable audit for joining scholarly or patent records to external personal-data sources.

## Operationalization

- Define the external source and matching keys used to recover birthdates.
- Report match rates and the requirement for unique matches.
- Compare matched and unmatched inventors on available patent features such as zip-code availability, assignee status, patent class, team size, and output timing.
- Re-estimate key age or career results with controls and sensitivity checks.
- Treat the matched age panel as a selected analytic sample rather than the full inventor population.

## Evidence and Validations

- Verified full-text evidence from Jones (2009) uses AnyBirthday.com to recover birthdate information for a subset of inventors with zip codes.
- Jones reports the matching process and notes that the resulting sample is not random.
- The paper audits observable differences and reports that the main age-trend estimates are not materially changed by relevant controls.

## Caveats

- External birthdate sources can be incomplete, stale, or biased toward particular demographics.
- Zip-code availability and unique-name matching can select specific regions, career stages, or institutional contexts.
- Selection audits based on observed patent fields cannot rule out unobserved demographic bias.

## Links

- [inventor birthdate matching panel](../datasets/inventor_birthdate_matching_panel.md)
- [age at first invention](../measures/age_at_first_invention.md)
- [patent application-year time anchor](../methods/patent_application_year_time_anchor.md)
- [NBER utility-patent microdata backbone](../datasets/nber_utility_patent_microdata_backbone.md)
- [evaluated-party data verification](evaluated_party_data_verification.md)

## References

- Jones, B. F. (2009). The burden of knowledge and the Death of the Renaissance Man: Is innovation getting harder? *The Review of Economic Studies*, 76(1), 283-317. https://doi.org/10.1111/j.1467-937x.2008.00531.x [OpenAlex: W3124253902; Dimensions: pub.1061936767; SciSciNet: W3124253902; WoS: unknown]

## Metadata

- Concept ID: `anybirthday_age_sample_selection_audit`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Jones (2009) (2009)
- Latest seen paper: Jones (2009) (2009)
- Primary reference DOI: `10.1111/j.1467-937x.2008.00531.x`
- OpenAlex ID: `W3124253902`
- Dimensions ID: `pub.1061936767`
- SciSciNet ID: `W3124253902`
- Aliases: inventor birthdate selection audit; AnyBirthday matching bias; age-sample robustness; patent birthdate match audit
