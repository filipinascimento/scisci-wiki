# Citing-side normalization

## Summary

Citing-side normalization adjusts citation impact indicators using properties of the publications that make citations, especially their reference-list lengths.

## Canonical Form

- Unit of analysis: citing paper, citation edge, reference list, cited paper, journal, field, or portfolio.
- Typical representation: fractional citation weight, reference-list-length-adjusted citation, source-normalized journal indicator, or citing-side normalized impact score.
- Method target: correct field differences in citation density without requiring an external field classification.
- Empirical signature: citations from fields or papers with long reference lists carry less weight than citations from shorter-reference contexts.

## Uses in Science of Science

- Alternative to [cited-side normalization](cited_side_normalization.md) when field classifications are disputed or unavailable.
- Provides the normalization logic behind [source normalized impact per paper](../measures/source_normalized_impact_per_paper.md).
- Connects citation-impact measurement to [reference-list dilution](../mechanisms/reference_list_dilution.md) and [recursive citation weighting](../mechanisms/recursive_citation_weighting.md).
- Helps audit whether field differences come from citation propensity rather than only from topic categories.

## Operationalization

- For each citation, compute a weight based on the citing publication's reference-list length or the citation density of the citing source.
- Sum weighted citations for papers, journals, or portfolios.
- Normalize or compare scores without assigning cited papers to fixed field categories.
- Compare results with cited-side field-normalized indicators as a sensitivity check.
- Report whether cited-publication reference length or citing-publication reference length is used, because these are different concepts.
- For disruption indicators, adjust the predecessor-only term for the focal work's own reference-list length or field-year reference-list norms before interpreting long-run CD-index trends.

## Evidence and Validations

- Verified full-text evidence from Waltman (2016) identifies citing-side normalization as an important alternative to field-classification-based approaches.
- The review explains that citing-side normalization corrects for field differences in citation density by using the fact that some fields have longer reference lists than others.
- Waltman states that the concept originates from Zitt and Small (2008) and reviews empirical comparisons between citing-side and traditional cited-side normalization.
- The full text notes that the journal-level SNIP indicator in Scopus is based on citing-side normalization.
- Verified full-text evidence from Park, Leahey, and Funk (2023) applies citing-side normalization to disruption measurement, because growing reference lists can mechanically increase the count of later papers or patents that cite only a focal work's predecessors.
- Park et al. construct paper-normalized and field-year-normalized CD-index variants by adjusting the predecessor-only `Nk` term using either the focal work's backward citations or the field-year average number of backward citations; the decline in disruptiveness persists under these variants.

## Caveats

- Reference-list length is an imperfect proxy for field citation density and citation meaning.
- Citing-side normalization can be sensitive to database reference coverage and document-type filtering.
- It should not be confused with recursive weighting, although both may use reference-list length.

## Links

- [cited-side normalization](cited_side_normalization.md)
- [source normalized impact per paper](../measures/source_normalized_impact_per_paper.md)
- [reference-list dilution](../mechanisms/reference_list_dilution.md)
- [recursive citation weighting](../mechanisms/recursive_citation_weighting.md)
- [field normalized citation impact](../measures/field_normalized_citation_impact.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)
- [disruptiveness decline over time](../mechanisms/disruptiveness_decline.md)
- [alternative CD-index derivation robustness](../validations/alternative_cd_index_derivation_robustness.md)
- [disruptiveness practice-control stack](../validations/disruptiveness_practice_control_stack.md)

## References

- Waltman, L. (2016). A review of the literature on citation impact indicators. *Journal of Informetrics*, 10(2), 365-391. https://doi.org/10.1016/j.joi.2016.02.007 [OpenAlex: W767067438; Dimensions: pub.1051718960; WoS: unknown]
- Park, M., Leahey, E., & Funk, R. J. (2023). Papers and patents are becoming less disruptive over time. *Nature*, 613, 138-144. https://doi.org/10.1038/s41586-022-05543-x [OpenAlex: W4313545395; Dimensions: pub.1154226028; SciSciNet: W4313545395]

## Metadata

- Concept ID: `citing_side_normalization`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Waltman (2016) (2016)
- Latest seen paper: Park et al. (2023) (2023)
- Primary reference DOI: `10.1016/j.joi.2016.02.007`
- OpenAlex ID: `W767067438`
- Dimensions ID: `pub.1051718960`
- SciSciNet ID: `W767067438`
- Aliases: source-side normalization; citing-paper normalization; reference-list-length normalization; citation-density normalization
