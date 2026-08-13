# Source normalized impact per paper

## Summary

Source normalized impact per paper (SNIP) is a journal-level citation impact indicator that normalizes for field differences using the citation behavior of citing sources.

## Canonical Form

- Unit of analysis: journal, source, citation edge, citing publication, cited journal, publication year, or journal portfolio.
- Typical representation: SNIP score, source-normalized journal impact, citing-side normalized journal indicator, or Scopus journal metric.
- Measurement target: average citation impact per paper after adjusting for differences in citation density across source contexts.
- Empirical signature: journal impact is adjusted downward when citations come from high-reference-density contexts and upward when they come from low-reference-density contexts.

## Uses in Science of Science

- Journal-level implementation of [citing-side normalization](../methods/citing_side_normalization.md).
- Complements [journal impact factor](journal_impact_factor.md), [Eigenfactor metrics](eigenfactor_metrics.md), and [citation impact indicators](citation_impact_indicators.md).
- Provides a field-normalized journal metric when journal subject categories are insufficient or contested.
- Useful in [responsible metrics](responsible_metrics.md) discussions because it makes citation-density correction explicit.

## Operationalization

- Define the journal source set and publication/citation window.
- Count citations received by journal publications.
- Estimate citing-source citation density or reference-list-length context.
- Normalize received citations by the citation potential of the citing sources.
- Report the SNIP version, source database, journal coverage, and treatment of document types.

## Evidence and Validations

- Verified full-text evidence from Waltman (2016) describes SNIP as the source normalized impact per paper indicator provided in Scopus.
- The review states that SNIP is based on citing-side normalization and was introduced as a journal-level normalized citation impact indicator.
- Waltman distinguishes the original SNIP version from the later version included in Scopus and points to comparisons and critiques of the two versions.
- The same review places SNIP alongside other normalized journal indicators and contrasts it with journal impact factor and recursive journal indicators.

## Caveats

- SNIP is a journal-level indicator and should not be substituted for article-level impact.
- Scores depend on Scopus source coverage, document-type handling, and SNIP version.
- Citation-density normalization does not remove all field, language, or prestige effects.

## Links

- [citing-side normalization](../methods/citing_side_normalization.md)
- [cited-side normalization](../methods/cited_side_normalization.md)
- [journal impact factor](journal_impact_factor.md)
- [Eigenfactor metrics](eigenfactor_metrics.md)
- [recursive citation weighting](../mechanisms/recursive_citation_weighting.md)
- [citation impact indicators](citation_impact_indicators.md)
- [responsible metrics](responsible_metrics.md)

## References

- Waltman, L. (2016). A review of the literature on citation impact indicators. *Journal of Informetrics*, 10(2), 365-391. https://doi.org/10.1016/j.joi.2016.02.007 [OpenAlex: W767067438; Dimensions: pub.1051718960; WoS: unknown]

## Metadata

- Concept ID: `source_normalized_impact_per_paper`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Waltman (2016) (2016)
- Latest seen paper: Waltman (2016) (2016)
- Primary reference DOI: `10.1016/j.joi.2016.02.007`
- OpenAlex ID: `W767067438`
- Dimensions ID: `pub.1051718960`
- SciSciNet ID: `W767067438`
- Aliases: SNIP; source-normalized journal impact; Scopus SNIP; citing-side normalized journal impact
