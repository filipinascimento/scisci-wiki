# SCI/SSCI journal-map corpus 2000

## Summary

SCI/SSCI journal-map corpus 2000 is the combined Science Citation Index and Social Science Citation Index file-year corpus used by Boyack, Klavans, and Borner to build and validate a journal-level map of all science.

## Canonical Form

- Unit of analysis: journal, article record, reference, journal category, or journal-pair citation relation.
- Typical representation: source-year journal list, citing-cited journal universe, reference pairs, and category assignments.
- Data target: a bounded, whole-of-science journal corpus for constructing and validating science maps.
- Empirical signature: journals are included only when they appear as both citing and cited journals in the selected source year.

## Uses in Science of Science

- Provides the data substrate for [journal similarity mapping](../methods/journal_similarity_mapping.md), [science maps](../representations/science_maps.md), and [journal-cluster science backbones](../representations/journal_cluster_science_backbones.md).
- Makes source coverage explicit before interpreting [disciplinary independence](../measures/disciplinary_independence.md) or [cluster citation-dependency arrows](../representations/cluster_citation_dependency_arrows.md).
- Supplies reference category assignments for [mutual-information map structural accuracy](../validations/mutual_information_map_structural_accuracy.md).
- Gives a historical benchmark for comparing later Dimensions, OpenAlex, Scopus, and WoS map corpora.

## Operationalization

- Retrieve a fixed file-year corpus from SCI and SSCI.
- Restrict the map universe to journals that appear on both citing and cited sides when the workflow requires journal-journal citation matrices.
- Count references at the journal-pair level, documenting the share that cannot be assigned to included journals.
- Retrieve journal category assignments for validation and interpretation.
- Record source-year, document count, journal count, reference count, category count, and assignment multiplicity.

## Evidence and Validations

- Verified full-text evidence from Boyack et al. (2005) uses 1.058 million records from 7,349 journals in the combined SCI and SSCI year-2000 files.
- The analysis is restricted to 7,121 journals that appear as both citing and cited journals.
- The paper reports 23.08 million references, with roughly 30% not assignable on the cited side to the 7,121-journal universe, leaving 16.24 million references between journal pairs.
- For validation, the same corpus includes 205 unique ISI categories and 11,308 journal-category assignments, averaging 1.59 categories per journal.

## Caveats

- SCI/SSCI year-2000 coverage omits many national, regional, non-English, proceedings, and workshop sources.
- Journal-level aggregation hides article-level interdisciplinarity and multidisciplinary journal heterogeneity.
- The corpus is historical; current map-building should prefer updated Dimensions, OpenAlex, Scopus, or WoS sources when available and documented.

## Links

- [journal similarity mapping](../methods/journal_similarity_mapping.md)
- [journal inter-citation and co-citation matrices](../representations/journal_intercitation_cocitation_matrices.md)
- [science maps](../representations/science_maps.md)
- [journal-cluster science backbones](../representations/journal_cluster_science_backbones.md)
- [mutual-information map structural accuracy](../validations/mutual_information_map_structural_accuracy.md)
- [journal category specificity audit](../validations/journal_category_specificity_audit.md)
- [Web of Science](web_of_science.md)

## References

- Boyack, K. W., Klavans, R., & Borner, K. (2005). Mapping the backbone of science. *Scientometrics*, 64, 351-374. https://doi.org/10.1007/s11192-005-0255-6 [OpenAlex: W2100484636; Dimensions: pub.1011403274; WoS: unknown]

## Metadata

- Concept ID: `sci_ssci_journal_map_corpus_2000`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Boyack et al. (2005) (2005)
- Latest seen paper: Boyack et al. (2005) (2005)
- Primary reference DOI: `10.1007/s11192-005-0255-6`
- OpenAlex ID: `W2100484636`
- Dimensions ID: `pub.1011403274`
- SciSciNet ID: `W2100484636`
- Aliases: SCI SSCI 2000 map corpus; year-2000 journal map corpus; ISI all-science journal corpus; 7121-journal map panel
