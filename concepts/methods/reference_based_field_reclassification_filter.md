# Reference-based field reclassification filter

## Summary

Reference-based field reclassification filter reassigns multidisciplinary publications to more specific fields using the dominant field of their reference lists before field-restricted analysis.

## Canonical Form

- Unit of analysis: publication, reference list, journal field, multidisciplinary source, or field-restricted corpus.
- Typical representation: field label inferred from the modal or dominant field among cited journals.
- Method target: reduce multidisciplinary-journal noise when contribution patterns, citation patterns, or author roles are field-dependent.
- Empirical signature: many papers initially labeled multidisciplinary receive more specific field labels and only those in the target fields are retained.

## Uses in Science of Science

- Homogenizes the [PLOS contribution-statement training set](../datasets/plos_contribution_statement_training_set.md) before role modeling.
- Improves comparability for [task specialization](../mechanisms/task_specialization.md) and [contributorship prediction models](contributorship_prediction_models.md).
- Provides a reusable corpus-construction step for datasets dominated by broad journals such as PLOS ONE.
- Links reference-list representations to field assignment when journal-level categories are too coarse.

## Operationalization

- Assign each cited reference to a journal and journal-level field classification.
- For publications labeled multidisciplinary, count the fields represented in their reference lists.
- Reassign each publication to the field from which most references come.
- Keep only publications assigned to the target fields or report the field distribution after reclassification.
- Document unmatched references and publications whose references do not produce a clear field.

## Evidence and Validations

- Verified full-text evidence from Robinson-Garcia et al. (2020) states that the authors restrict their dataset to Medical and Life Sciences to reduce disciplinary differences in task distribution.
- The paper assigns papers to fields by identifying the journal to which each reference belongs and then assigning each publication to the field from which most references come.
- In the materials section, the authors note that many PLOS ONE papers would otherwise be categorized as Multidisciplinary under a journal-level classification.
- The reference-list reclassification yields a seed dataset of 70,694 publications and 347,136 distinct authors in Medical and Life Sciences.

## Caveats

- Reference lists can reflect literature use rather than the paper's own field.
- Interdisciplinary papers may be forced into a single dominant field even when multiple fields are genuinely relevant.
- Classification depends on coverage and accuracy of journal-field mappings for references.

## Links

- [PLOS contribution-statement training set](../datasets/plos_contribution_statement_training_set.md)
- [task specialization](../mechanisms/task_specialization.md)
- [contributorship prediction models](contributorship_prediction_models.md)
- [author contribution statements](../datasets/author_contribution_statements.md)
- [contribution role vectors](../representations/contribution_role_vectors.md)
- [contribution taxonomy consistency filter](contribution_taxonomy_consistency_filter.md)

## References

- Robinson-Garcia, N., Costas, R., Sugimoto, C. R., Lariviere, V., & Nane, G. F. (2020). Task specialization across research careers. *eLife*, 9, e60586. https://doi.org/10.7554/elife.60586 [OpenAlex: W3097159753; Dimensions: pub.1132069903; WoS: unknown]

## Metadata

- Concept ID: `reference_based_field_reclassification_filter`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Robinson-Garcia et al. (2020) (2020)
- Latest seen paper: Robinson-Garcia et al. (2020) (2020)
- Primary reference DOI: `10.7554/elife.60586`
- OpenAlex ID: `W3097159753`
- Dimensions ID: `pub.1132069903`
- SciSciNet ID: `W3097159753`
- Aliases: reference-list field assignment; multidisciplinary field reclassification; cited-journal field filter; reference-derived field label
