# Field Collaboration-Degree Contrast

## Summary

Field collaboration-degree contrast measures how the average number of collaborators per author differs across scientific fields or source domains.

## Canonical Form

- Unit of analysis: author, field, database, time window, or collaboration graph.
- Typical representation: mean collaborators per author by field or database.
- Measurement target: field-level collaboration intensity as reflected in coauthorship degree.
- Empirical signature: experimental, biomedical, theoretical, and computing domains show sharply different mean degrees.

## Uses in Science of Science

- Summarizes a central dimension of [field collaboration-mode contrast](field_collaboration_mode_contrast.md).
- Complements [collaborator-count distribution](collaborator_count_distribution.md) by emphasizing field-level means.
- Provides context for [mega-collaboration degree inflation](../validations/mega_collaboration_degree_inflation.md) and [collaborator exponent dominance regime](collaborator_exponent_dominance_regime.md).

## Operationalization

- Construct a coauthorship graph for each source domain and time window.
- Count unique collaborators per author.
- Report the mean, uncertainty, and distributional shape by field.
- Interpret contrasts with source coverage and field authorship norms.

## Evidence and Validations

- Verified full-text evidence from Newman (2001) reports large differences in average collaborators per author across MEDLINE, Los Alamos subfields, SPIRES, and NCSTRL.
- The paper contrasts low collaborator counts in theoretical and computer-science databases with higher counts in biomedical and experimental physics sources.
- It notes that high-energy experiment has an especially high average, reflecting very large collaborations.

## Caveats

- Mean degree can be dominated by extreme large-team practices.
- Author-name ambiguity can inflate or deflate field means.
- Field databases differ in coverage, document type, and preprint inclusion.

## Links

- [collaborator-count distribution](collaborator_count_distribution.md)
- [field collaboration-mode contrast](field_collaboration_mode_contrast.md)
- [mega-collaboration degree inflation](../validations/mega_collaboration_degree_inflation.md)
- [collaborator exponent dominance regime](collaborator_exponent_dominance_regime.md)
- [coauthorship source-domain panels](../datasets/coauthorship_source_domain_panels.md)

## References

- Newman, M. E. J. (2001). The structure of scientific collaboration networks. *Proceedings of the National Academy of Sciences*, 98(2), 404-409. https://doi.org/10.1073/pnas.98.2.404 [OpenAlex: W2125315567; Dimensions: pub.1018280471; SciSciNet: W2125315567; WoS: unknown]

## Metadata

- Concept ID: `field_collaboration_degree_contrast`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Newman (2001) (2001)
- Latest seen paper: Newman (2001) (2001)
- Primary reference DOI: `10.1073/pnas.98.2.404`
- OpenAlex ID: `W2125315567`
- Dimensions ID: `pub.1018280471`
- SciSciNet ID: `W2125315567`
- Aliases: field mean collaborator contrast; collaboration degree field contrast; average coauthor degree by field; source-domain collaborator intensity
