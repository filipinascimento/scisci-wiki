# WOS funding-acknowledgment onset bias

## Summary

WOS funding-acknowledgment onset bias is the coverage problem created when Web of Science funding-acknowledgment recording begins or accelerates within the study window, changing the observed funded-paper denominator over time.

## Canonical Form

- Unit of analysis: paper, funding-acknowledgment field, publication year, funder, grant ID, or source-database policy change.
- Typical representation: funding-coverage time series, post-onset restriction, funded-paper denominator caveat, or same-period control design.
- Validation target: prevent funding-linked analyses from confusing database recording changes with changes in research support.
- Empirical signature: the share of WOS papers with recorded funding jumps after the database starts systematic acknowledgment capture.

## Uses in Science of Science

- Qualifies [funding acknowledgments](../datasets/funding_acknowledgments.md) when they are used as a funding data layer.
- Adds a source-coverage guardrail to [funding-award disruption contrast](funding_award_disruption_contrast.md) and [funding definition sensitivity](funding_definition_sensitivity.md).
- Connects to broader source-version and denominator checks in [citation data census dates](../methods/citation_data_census_dates.md) and [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md).
- Helps compare Web of Science funding evidence with fresher grant metadata in [Dimensions](../datasets/dimensions.md) or other grant databases.

## Operationalization

- Plot the share of papers with recorded funding acknowledgments by publication year.
- Restrict analyses to years after systematic recording begins, or include year-specific coverage controls.
- Compare funded papers with same-period, same-journal or same-field controls rather than all historical papers.
- Report whether the analysis uses funder names only, grant IDs, or normalized grant links.
- Treat pre-onset missing funding fields as unknown rather than unfunded.

## Evidence and Validations

- Verified full-text evidence from Wu, Wang, and Evans (2019) reports that Web of Science recorded financial support for 10.9% of papers from 1900 to 2014.
- The paper states that funding-acknowledgment recording began in 2008 after a Web of Science commitment to record the information.
- Wu et al. report rapid coverage growth after onset: 15.2% in 2008, 38.9% in 2009, and 55.8% in 2014.
- Their funding-disruption analysis therefore focuses on papers acknowledging five major government agencies in a 2004-2014 window and interprets acknowledgment evidence as an observed funding layer, not a causal assignment.

## Caveats

- Funding acknowledgment absence before or during onset does not imply absence of funding.
- Recording policy changes can differ by field, journal, language, country, funder, and document type.
- Even after onset, acknowledgments may omit block funding, informal support, or unnormalized grant identifiers.

## Links

- [funding acknowledgments](../datasets/funding_acknowledgments.md)
- [funding-award disruption contrast](funding_award_disruption_contrast.md)
- [funding definition sensitivity](funding_definition_sensitivity.md)
- [grant-acknowledgment output linkage](../methods/grant_acknowledgment_output_linkage.md)
- [Dimensions](../datasets/dimensions.md)
- [citation data census dates](../methods/citation_data_census_dates.md)
- [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md)

## References

- Wu, L., Wang, D., & Evans, J. A. (2019). Large teams develop and small teams disrupt science and technology. *Nature*, 566, 378-382. https://doi.org/10.1038/s41586-019-0941-9 [OpenAlex: W2913773162; Dimensions: pub.1112085796; WoS: unknown]

## Metadata

- Concept ID: `wos_funding_acknowledgment_onset_bias`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wu et al. (2019) (2019)
- Latest seen paper: Wu et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41586-019-0941-9`
- OpenAlex ID: `W2913773162`
- Dimensions ID: `pub.1112085796`
- SciSciNet ID: `W2913773162`
- Aliases: WOS funding onset bias; funding acknowledgment recording bias; WOS funding coverage jump; funding-field denominator bias
