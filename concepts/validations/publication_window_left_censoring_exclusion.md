# Publication-window left-censoring exclusion

## Summary

Classification windows can exclude older in-window papers because their references point to pre-window records unavailable in the citation graph.

## Canonical Form

- Unit of analysis: publication, source window, reference, connected component, exclusion flag, or publication year.
- Typical representation: year-stratified exclusion audit for pre-window reference loss.
- Mechanism, measurement, or validation target: left-censoring bias in citation-based field classifications.
- Empirical signature: earlier source-window years have higher exclusion rates because their references fall before the retained publication window.

## Uses in Science of Science

- Connects citation-window coverage validation to [sparse direct citation exclusion](sparse_direct_citation_exclusion.md) and [citation database coverage sensitivity](citation_database_coverage_sensitivity.md).
- Provides a reusable motif for comparing [wos 2001 2010 publication classification corpus](../datasets/wos_2001_2010_publication_classification_corpus.md) with adjacent science-of-science constructs.
- Should be cross-referenced when interpreting [citation age backfile retention](../methods/citation_age_backfile_retention.md) in linked scholarly data.

## Operationalization

- Stratify excluded publications by publication year and citation-component status.
- Measure how many references point before the source window or outside indexed backfiles.
- Sensitivity-check field assignments with longer backfiles or external reference data.

## Evidence and Validations

- Verified full-text evidence from Waltman and van Eck (2012) reports higher exclusion rates for earlier publication years.
- The paper explains this through references from early-window publications pointing before 2001 and therefore not counted in the classification graph.

## Caveats

- The bias depends on the source-window definition and reference backfile depth.
- Newer papers can also suffer right-censoring in citation accumulation, so window effects are asymmetric.

## Links

- [Sparse direct-citation exclusion](sparse_direct_citation_exclusion.md)
- [Citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [WoS 2001-2010 publication classification corpus](../datasets/wos_2001_2010_publication_classification_corpus.md)
- [Citation-age backfile retention](../methods/citation_age_backfile_retention.md)
- [WoS longitudinal coverage drift](wos_longitudinal_coverage_drift.md)
- [Subfield reference coverage filter](subfield_reference_coverage_filter.md)

## References

- Waltman, L., & van Eck, N. J. (2012). A new methodology for constructing a publication-level classification system of science. *Journal of the American Society for Information Science and Technology*, 63(12), 2378-2392. https://doi.org/10.1002/asi.22748 [OpenAlex: W2126566678; Dimensions: pub.1036746088; WoS: unknown]

## Metadata

- Concept ID: `publication_window_left_censoring_exclusion`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Waltman and van Eck (2012) (2012)
- Latest seen paper: Waltman and van Eck (2012) (2012)
- Primary reference DOI: `10.1002/asi.22748`
- OpenAlex ID: `W2126566678`
- Dimensions ID: `pub.1036746088`
- SciSciNet ID: `W2126566678`
- Aliases: source-window citation truncation; early-window exclusion bias; pre-window reference loss; left-censored citation component bias
