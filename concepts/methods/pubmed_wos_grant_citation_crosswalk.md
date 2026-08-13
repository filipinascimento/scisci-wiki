# PubMed-WoS grant citation crosswalk

## Summary

PubMed-WoS grant citation crosswalk links PubMed grant-acknowledgment publications to Web of Science citation records so grant outcomes can use citation and hit-publication measures.

## Canonical Form

- Unit of analysis: grant, PMID, publication, WoS record, citation count, hit-publication flag, or match route.
- Typical representation: PMID-to-WoS crosswalk table with coverage flags and unmatched-publication diagnostics.
- Method target: combine grant-acknowledgment coverage from PubMed with citation measures from Web of Science.
- Empirical signature: grant citation outcomes are computed on the intersection of PubMed-acknowledged outputs and WoS-indexed citation records.

## Uses in Science of Science

- Refines [grant-acknowledgment output linkage](grant_acknowledgment_output_linkage.md) by making the citation database crosswalk explicit.
- Connects [funding acknowledgments and grant links](../datasets/funding_acknowledgments.md) to [citation percentile indicators](../measures/citation_percentile_indicators.md).
- Provides an audit point for [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md) and [Web of Science](../datasets/web_of_science.md) coverage.

## Operationalization

- Use PubMed grant-support fields or grant-number extraction to identify grant-linked publications.
- Match those publications to Web of Science records using identifiers, titles, journals, years, and author metadata.
- Preserve unmatched PubMed outputs and duplicated matches as coverage diagnostics.
- Compute citation, percentile, and hit-paper outcomes only after recording the crosswalk denominator.
- Report whether conclusions are robust to using PubMed-only publication counts and WoS-linked citation outcomes separately.

## Evidence and Validations

- Verified full-text evidence from Li and Agha (2015) constructs NIH R01 grant outputs from PubMed acknowledgments and then attaches citation outcomes from Web of Science.
- Their supplementary text makes clear that citation and hit-publication outcomes depend on publication records being linkable into citation data.
- This crosswalk explains why grant publication counts, grant citations, and high-impact publication measures can have different coverage properties.

## Caveats

- Database intersection can undercount outputs that are acknowledged in PubMed but not indexed or matched in Web of Science.
- Citation coverage and document-type rules differ across databases and over time.
- Grant-acknowledgment missingness remains upstream of the PubMed-WoS match.

## Links

- [grant-acknowledgment output linkage](grant_acknowledgment_output_linkage.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)
- [citation percentile indicators](../measures/citation_percentile_indicators.md)
- [Web of Science](../datasets/web_of_science.md)
- [funding acknowledgments and grant links](../datasets/funding_acknowledgments.md)
- [grant peer-review value-added](../validations/grant_peer_review_value_added.md)

## References

- Li, D., & Agha, L. (2015). Big names or big ideas: Do peer-review panels select the best science proposals? *Science*, 348(6233), 434-438. https://doi.org/10.1126/science.aaa0185 [OpenAlex: W1975626251; Dimensions: pub.1030280448; SciSciNet: W1975626251; WoS: unknown]

## Metadata

- Concept ID: `pubmed_wos_grant_citation_crosswalk`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Li and Agha (2015) (2015)
- Latest seen paper: Li and Agha (2015) (2015)
- Primary reference DOI: `10.1126/science.aaa0185`
- OpenAlex ID: `W1975626251`
- Dimensions ID: `pub.1030280448`
- SciSciNet ID: `W1975626251`
- Aliases: PubMed Web of Science grant crosswalk; grant citation database match; PMID-WoS citation linkage; grant-output citation crosswalk
