# Subfield reference coverage filter

## Summary

Subfield reference coverage filter removes or flags fields where too few cited references are covered by the citation database to support reliable normalized citation indicators.

## Canonical Form

- Unit of analysis: subfield, paper, cited reference, database-covered reference, field-year cell, or citation-normalization denominator.
- Typical representation: reference-coverage ratio, coverage threshold, excluded-paper count, or excluded-subfield list.
- Validation target: prevent field-normalized citation indicators from using fields whose citation links are too incomplete.
- Empirical signature: subfields below a minimum covered-reference share are excluded before author, field, or institutional comparisons.

## Uses in Science of Science

- Adds a field-level coverage check to [citation database coverage sensitivity](citation_database_coverage_sensitivity.md).
- Supports [normalized inflation-corrected citation score](../measures/normalized_inflation_corrected_citation_score.md) and [field-normalized citation impact](../measures/field_normalized_citation_impact.md) by auditing reference coverage before normalization.
- Documents one filtering step in the [WoS author citation inequality panel](../datasets/wos_author_citation_inequality_panel.md).
- Complements [subfield citation inequality heterogeneity](subfield_citation_inequality_heterogeneity.md) by distinguishing real field differences from source-coverage gaps.

## Operationalization

- For each subfield, compute the ratio of references covered by the citation database to total references.
- Choose and report a minimum coverage threshold.
- Remove papers or fields below the threshold, or retain them with an explicit low-coverage flag.
- Recompute key indicators with and without low-coverage fields when possible.
- Report the number of papers, authors, or fields removed by the filter.

## Evidence and Validations

- Verified full-text evidence from Nielsen and Andersen (2021) removes 125,690 papers because their subfield had less than 66.7% reference coverage in Web of Science.
- The paper defines the coverage value by averaging the ratio of covered references to total references in each subfield.
- This filter is applied before the final author population is defined for citation-inequality analysis.
- The design choice shows that field-normalized author indicators depend on the completeness of the underlying citation links, not only on publication metadata.

## Caveats

- A reference-coverage threshold can exclude fields with legitimate non-journal, book, regional, or multilingual citation practices.
- Coverage ratios may change as databases add sources or backfill references.
- Removing low-coverage subfields can improve measurement reliability while narrowing the domain of inference.
- The threshold should be justified rather than treated as a universal default.

## Links

- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [Web of Science](../datasets/web_of_science.md)
- [WoS author citation inequality panel](../datasets/wos_author_citation_inequality_panel.md)
- [normalized inflation-corrected citation score](../measures/normalized_inflation_corrected_citation_score.md)
- [field-normalized citation impact](../measures/field_normalized_citation_impact.md)
- [subfield citation inequality heterogeneity](subfield_citation_inequality_heterogeneity.md)
- [reference set construction](../methods/reference_set_construction.md)
- [full cited-reference indexing](../datasets/full_cited_reference_indexing.md)
- [SSH bibliometric coverage gap](ssh_bibliometric_coverage_gap.md)

## References

- Nielsen, M. W., & Andersen, J. P. (2021). Global citation inequality is on the rise. *Proceedings of the National Academy of Sciences*, 118(7), e2012208118. https://doi.org/10.1073/pnas.2012208118 [OpenAlex: W3128893582; Dimensions: pub.1135221443; WoS: unknown]

## Metadata

- Concept ID: `subfield_reference_coverage_filter`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Nielsen and Andersen (2021) (2021)
- Latest seen paper: Nielsen and Andersen (2021) (2021)
- Primary reference DOI: `10.1073/pnas.2012208118`
- OpenAlex ID: `W3128893582`
- Dimensions ID: `pub.1135221443`
- SciSciNet ID: `W3128893582`
- Aliases: reference coverage threshold; low-reference-coverage field exclusion; subfield citation coverage filter; covered-reference ratio filter
