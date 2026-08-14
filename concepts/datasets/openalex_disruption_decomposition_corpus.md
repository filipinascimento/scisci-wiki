# OpenAlex disruption-decomposition corpus

## Summary

The OpenAlex disruption-decomposition corpus is the set of journal-paper cohorts used by Lin et al. to decompose the D-index, estimate predecessor citation concentration, and test reference-length robustness.

## Canonical Form

- Unit of analysis: OpenAlex journal article, focal-reference citation neighborhood, or downstream citing paper.
- Typical representation: linked work-reference-citation records with publication year, citation counts, reference counts, `N_i`, `N_j`, `N_k`, `d_p`, `b_p`, and D-index.
- Data scope: a 49-million-article OpenAlex base through 2024, with task-specific filtered samples.
- Persistent data record: Harvard Dataverse DOI `10.7910/DVN/VE3AFX` as reported in the paper.

## Uses in Science of Science

- Supports large-scale estimation of [local displacement factor](../measures/local_displacement_factor.md) and [relative predecessor dominance factor](../measures/relative_predecessor_dominance_factor.md).
- Provides the empirical basis for [D-index reference-length invariance](../validations/d_index_reference_length_invariance.md).
- Demonstrates how [OpenAlex](openalex.md) can support a citation-neighborhood metric at tens-of-millions scale.

## Operationalization

- Start from journal articles with linked references and citations in a versioned OpenAlex snapshot.
- For the main decomposition, retain 1900-2020 articles with at least one reference and at least 10 citations.
- Use broader one-citation/one-reference cohorts for distribution checks and a 1,000-paper sample with at least three references for Zipf calibration.
- Record every eligibility threshold and snapshot date because the paper uses different cohorts for different figures.

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2026) describes a 49-million-journal-article OpenAlex base spanning 1800-2024.
- The main component analysis uses 22 million papers from 1900-2020 with at least one reference and at least 10 citations.
- A broader distribution includes 42 million papers with at least one citation and one reference; a random 1,000-paper sample calibrates the reference-citation Zipf model.
- The reference-length analysis uses 929,900 papers with similar local displacement levels and at least 10 citations.

## Caveats

- The base corpus endpoint is 2024 even though the interpreting paper was published in 2026; this is an analysis window, not the current OpenAlex coverage ceiling.
- Cohort definitions differ across figures and should not be merged without preserving eligibility flags.
- Books, monographs, multilingual references, and nonjournal outputs are underrepresented or excluded, limiting cross-domain generalization.

## Links

- [OpenAlex](openalex.md)
- [disruption index](../measures/disruption_index.md)
- [local displacement factor](../measures/local_displacement_factor.md)
- [relative predecessor dominance factor](../measures/relative_predecessor_dominance_factor.md)
- [D-index reference-length invariance](../validations/d_index_reference_length_invariance.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)

## References

- Lin, Y., Li, L., & Wu, L. (2026). The Disruption Index measures displacement between a paper and its most cited reference. *Quantitative Science Studies*, 7, 229-239. https://doi.org/10.1162/QSS.a.409 [OpenAlex: W7119230500; Dimensions: unknown; WoS: unknown]

## Metadata

- Concept ID: `openalex_disruption_decomposition_corpus`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Lin et al. (2026) (2026)
- Latest seen paper: Lin et al. (2026) (2026)
- Primary reference DOI: `10.1162/qss.a.409`
- OpenAlex ID: `W7119230500`
- Dimensions ID: `unknown`
- SciSciNet ID: `unknown`
- Aliases: Lin-Li-Wu OpenAlex disruption corpus; D-index decomposition dataset; OpenAlex predecessor-displacement panel
