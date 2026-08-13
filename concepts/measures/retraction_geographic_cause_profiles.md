# Retraction geographic cause profiles

## Summary

Retraction geographic cause profiles compare the country or region of retracted papers across cause categories such as fraud, suspected fraud, plagiarism, duplicate publication, and error.

## Canonical Form

- Unit of analysis: retracted paper, author country, institution country, cause category, region, journal, or field.
- Typical representation: country-by-cause table, cause-specific geography map, regional share, or field-adjusted cause profile.
- Measurement target: where different visible correction causes are concentrated within a retraction dataset.
- Empirical signature: fraud, plagiarism, and duplicate-publication retractions can have different geographic distributions.

## Uses in Science of Science

- Adds a geographic layer to [retraction cause taxonomies](../methods/retraction_cause_taxonomies.md).
- Helps distinguish global correction-system coverage from cause-specific patterns in [retractions and scientific self-correction](../validations/retractions_self_correction.md).
- Supports audits of whether [retraction source reconciliation](../methods/retraction_source_reconciliation.md) has uneven source availability by country.
- Connects integrity outcomes to broader geography concepts such as [citation elite geography](../representations/citation_elite_geography.md) and [country mobility role typology](country_mobility_role_typology.md).

## Operationalization

- Assign a country or region to each retracted article using corresponding-author address, author affiliations, institution, or the paper's country of origin.
- Code cause categories using a reconciled taxonomy.
- Compare country shares within each cause category, while reporting field, journal, and database coverage.
- Avoid interpreting country profiles as misconduct prevalence without accounting for publication volume, detection systems, source availability, and institutional reporting.

## Evidence and Validations

- Verified full-text evidence from Fang, Steen, and Casadevall (2012) reports that retracted articles in their PubMed corpus originated in 56 countries.
- Fang et al. find that the United States, Germany, Japan, and China accounted for three-quarters of fraud or suspected-fraud retractions.
- The same paper reports that China and India together accounted for more plagiarism cases than the United States, and that duplicate publication showed a pattern similar to plagiarism.
- Fang et al. interpret the differing geographic patterns by cause as evidence against a single explanation for rising retractions.

## Caveats

- Country assignment rules can change results, especially for international teams.
- Country profiles are affected by database coverage, investigation capacity, journal practices, and reporting systems.
- Retraction geography should not be read as the geography of all misconduct or error.

## Links

- [retractions and scientific self-correction](../validations/retractions_self_correction.md)
- [retraction cause taxonomies](../methods/retraction_cause_taxonomies.md)
- [retraction source reconciliation](../methods/retraction_source_reconciliation.md)
- [misconduct retraction share](misconduct_retraction_share.md)
- [journal-impact-factor retraction gradient](../validations/journal_impact_factor_retraction_gradient.md)
- [citation elite geography](../representations/citation_elite_geography.md)
- [country mobility role typology](country_mobility_role_typology.md)

## References

- Fang, F. C., Steen, R. G., & Casadevall, A. (2012). Misconduct accounts for the majority of retracted scientific publications. *Proceedings of the National Academy of Sciences*, 109(42), 17028-17033. https://doi.org/10.1073/pnas.1212247109 [OpenAlex: W2097110982; Dimensions: pub.1035913875; WoS: unknown]

## Metadata

- Concept ID: `retraction_geographic_cause_profiles`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Fang et al. (2012) (2012)
- Latest seen paper: Fang et al. (2012) (2012)
- Primary reference DOI: `10.1073/pnas.1212247109`
- OpenAlex ID: `W2097110982`
- Dimensions ID: `pub.1035913875`
- SciSciNet ID: `W2097110982`
- Aliases: geographic retraction profiles; country-by-cause retractions; retraction country patterns; cause-specific retraction geography
