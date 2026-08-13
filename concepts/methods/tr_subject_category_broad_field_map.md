# TR subject-category broad-field map

## Summary

A reproducible mapping from Thomson Reuters journal subject categories defines the broad fields used for attention-decay comparisons.

## Canonical Form

- Unit of analysis: WoS paper, journal subject category, broad field, Appendix category list, or field label.
- Typical representation: category-to-broad-field mapping table.
- Mechanism, measurement, or validation target: field construction for citation-aging comparisons.
- Empirical signature: publications are assigned to Physics, Chemistry, Molecular Biology, or Physiology/Medicine from journal subject categories..

## Uses in Science of Science

- Refines attention-decay field construction by linking it to [wos attention decay panel](../datasets/wos_attention_decay_panel.md) and [field classifications](../measures/field_classifications.md).
- Useful as a reusable check when [field specific attention decay gradient](../validations/field_specific_attention_decay_gradient.md) is interpreted from citation histories.
- Adds cross-links to [topic specific attention pool caveat](../validations/topic_specific_attention_pool_caveat.md) so delayed-recognition and ranking motifs stay connected.

## Operationalization

- Assign WoS publications to broad fields from their Thomson Reuters journal subject categories.
- Use the Appendix category lists as the reproducible mapping artifact.
- Record excluded or overlapping categories before comparing field-level decay rates.

## Evidence and Validations

- Verified full-text evidence from Parolo et al. (2015) says field assignment starts from Thomson Reuters journal subject categories and aggregates them into broader disciplines.
- Appendix A enumerates the category-to-field mapping.

## Caveats

- Broad fields are coarse and can obscure topic-level attention pools.
- Biomedical categories can be close or overlapping.

## Links

- [WoS attention-decay panel](../datasets/wos_attention_decay_panel.md)
- [Field classifications](../measures/field_classifications.md)
- [Field-specific attention-decay gradient](../validations/field_specific_attention_decay_gradient.md)
- [Topic-specific attention-pool caveat](../validations/topic_specific_attention_pool_caveat.md)

## References

- Parolo, P. D. B., Pan, R. K., Ghosh, R., Huberman, B. A., Kaski, K., & Fortunato, S. (2015). Attention decay in science. *Journal of Informetrics*, 9(4), 734-745. https://doi.org/10.1016/j.joi.2015.07.006 [OpenAlex: W1833467796; Dimensions: pub.1042909490; SciSciNet: W1833467796; WoS: unknown]

## Metadata

- Concept ID: `tr_subject_category_broad_field_map`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Parolo et al. (2015) (2015)
- Latest seen paper: Parolo et al. (2015) (2015)
- Primary reference DOI: `10.1016/j.joi.2015.07.006`
- OpenAlex ID: `W1833467796`
- Dimensions ID: `pub.1042909490`
- SciSciNet ID: `W1833467796`
- Aliases: journal subject-category broad-field mapping; TR discipline aggregation; WoS category-to-field map
