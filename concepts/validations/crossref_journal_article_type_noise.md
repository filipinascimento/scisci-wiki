# Crossref journal-article type noise

## Summary

DOI-based article denominators can contain non-article front matter because source type labels are imperfect.

## Canonical Form

- Unit of analysis: Crossref DOI record, document type, article denominator, or sampled record.
- Typical representation: manual genre audit of records labeled `journal-article`.
- Mechanism, measurement, or validation target: document-type noise in DOI-based OA prevalence denominators.
- Empirical signature: a nontrivial share of records labeled as journal articles are front matter or similar nonresearch items..

## Uses in Science of Science

- Adds a document-type validation to [Crossref DOI sampling frame](../datasets/crossref_doi_sampling_frame.md).
- Useful before estimating [open access prevalence measurement](../measures/open_access_prevalence_measurement.md) on DOI samples.
- Connects DOI denominator bias to [document-type citation filtering](../methods/document_type_citation_filtering.md).

## Operationalization

- Audit sampled DOI records by document genre and report prevalence estimates with and without non-article exclusions.
- Record Crossref metadata vintage and label fields used for inclusion.
- Sensitivity-check OA rates after removing front matter and similar items.

## Evidence and Validations

- Verified full-text evidence from Piwowar et al. (2018) reports a manual check of Crossref `journal-article` records where about 7% were front matter or similar non-article material.
- The finding makes source type noise a denominator issue for OA prevalence estimates.

## Caveats

- The estimate depends on Crossref metadata vintage and sampling frame.
- Some nonresearch items are still legitimately scholarly outputs for access studies.

## Links

- [Crossref DOI sampling frame](../datasets/crossref_doi_sampling_frame.md)
- [DOI denominator coverage bias](doi_denominator_coverage_bias.md)
- [Citable-item denominator ambiguity](citable_item_denominator_ambiguity.md)
- [Document-type citation filtering](../methods/document_type_citation_filtering.md)
- [Open access prevalence measurement](../measures/open_access_prevalence_measurement.md)

## References

- Piwowar, H., Priem, J., Lariviere, V., Alperin, J. P., Matthias, L., Norlander, B., Farley, A., West, J., & Haustein, S. (2018). The state of OA: A large-scale analysis of the prevalence and impact of Open Access articles. *PeerJ*, 6, e4375. https://doi.org/10.7717/peerj.4375 [OpenAlex: W2741809807; Dimensions: pub.1101032124; WoS: unknown]

## Metadata

- Concept ID: `crossref_journal_article_type_noise`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Piwowar et al. (2018) (2018)
- Latest seen paper: Piwowar et al. (2018) (2018)
- Primary reference DOI: `10.7717/peerj.4375`
- OpenAlex ID: `W2741809807`
- Dimensions ID: `pub.1101032124`
- SciSciNet ID: `W2741809807`
- Aliases: Crossref article-type noise; DOI journal-article front-matter noise; OA denominator document-type noise
