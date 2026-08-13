# Author-majority field domain filter

## Summary

Author-majority field domain filter is the method of assigning each author to a dominant field before restricting an author-level inequality analysis to a disciplinary domain.

## Canonical Form

- Unit of analysis: author, publication portfolio, WoS subject category, OECD field, disciplinary domain, or author-level panel.
- Typical representation: majority-field assignment, domain inclusion rule, field-share threshold, or author portfolio table.
- Method target: create author-level field populations without double-counting authors across many publication categories.
- Empirical signature: each author receives a dominant field label and is included in a domain analysis only when the majority rule is satisfied.

## Uses in Science of Science

- Extends [field classifications](../measures/field_classifications.md) to author-level population construction.
- Supports the [WoS author citation inequality panel](../datasets/wos_author_citation_inequality_panel.md).
- Provides a concrete boundary rule for [field-classification sensitivity](../validations/field_classification_sensitivity.md).
- Helps manage coverage problems in fields affected by [SSH bibliometric coverage gap](../validations/ssh_bibliometric_coverage_gap.md).

## Operationalization

- Map each publication to one or more field classifications.
- Aggregate an author's publication record across fields using the chosen counting rule.
- Assign the author to the field or domain with the largest portfolio share.
- Exclude authors whose dominant share is too weak if the analysis needs clean disciplinary populations.
- Report sensitivity to alternative field systems, fractional assignment, and multi-domain inclusion.

## Evidence and Validations

- Verified full-text evidence from Nielsen and Andersen (2021) assigns authors to majority WoS/OECD fields before constructing author-level inequality populations.
- This protects domain comparisons from counting the same scientist repeatedly across many categories.
- The motif is a method rather than a field measure because its main role is population filtering.
- It also makes field-boundary choices explicit for readers evaluating author-level inequality estimates.

## Caveats

- Majority-field assignment can erase interdisciplinary careers.
- The dominant field can change over time, so static assignment may hide career shifts.
- Field labels inherit database coverage and classification errors.

## Links

- [field classifications](../measures/field_classifications.md)
- [WoS author citation inequality panel](../datasets/wos_author_citation_inequality_panel.md)
- [WoS subject-category fractionalization](../validations/wos_subject_category_fractionalization.md)
- [field-classification sensitivity](../validations/field_classification_sensitivity.md)
- [SSH bibliometric coverage gap](../validations/ssh_bibliometric_coverage_gap.md)
- [subfield reference coverage filter](../validations/subfield_reference_coverage_filter.md)
- [field-specific indicator suites](field_specific_indicator_suites.md)

## References

- Nielsen, M. W., & Andersen, J. P. (2021). Global citation inequality is on the rise. *Proceedings of the National Academy of Sciences*, 118(7), e2012208118. https://doi.org/10.1073/pnas.2012208118 [OpenAlex: W3128893582; Dimensions: pub.1135221443; SciSciNet: W3128893582; WoS: unknown]

## Metadata

- Concept ID: `author_majority_field_domain_filter`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Nielsen and Andersen (2021) (2021)
- Latest seen paper: Nielsen and Andersen (2021) (2021)
- Primary reference DOI: `10.1073/pnas.2012208118`
- OpenAlex ID: `W3128893582`
- Dimensions ID: `pub.1135221443`
- SciSciNet ID: `W3128893582`
- Aliases: majority-field author filter; dominant-field author assignment; author domain restriction rule; portfolio-majority field assignment
