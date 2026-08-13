# Biomedical chemical-trace proxy

## Summary

Chemical entities can trace biomedical knowledge even when papers are organized around diseases, organisms, or methods.

## Canonical Form

- Unit of analysis: MEDLINE article, chemical annotation, disease context, molecular method, organism, or biomedical discovery.
- Typical representation: chemical-annotation proxy for broader biomedical knowledge growth.
- Mechanism, measurement, or validation target: representativeness of molecule-centered biomedical discovery traces.
- Empirical signature: chemical annotations can approximate biomedical knowledge growth when diseases and methods leave chemical traces..

## Uses in Science of Science

- Refines biomedical-network validation by linking it to [biomedical chemical relationship network panel](../datasets/biomedical_chemical_relationship_network_panel.md) and [chemical relationship knowledge network](../representations/chemical_relationship_knowledge_network.md).
- Useful as a reusable distinction when [medline chemical annotation corpus](../datasets/medline_chemical_annotation_corpus.md) is analyzed in science-of-science data.
- Adds cross-links to [work centered scholarly entity model](../representations/work_centered_scholarly_entity_model.md) so the motif is not read as an isolated result.

## Operationalization

- Use expert chemical annotations and abstract co-mentions as a proxy network for biomedical discovery.
- Document omitted nonchemical entities, disease-centered work, clinical work, methods, and organism-level findings.
- Validate chemical traces against alternative entity layers when the research question is not molecular.

## Evidence and Validations

- Verified full-text evidence from Rzhetsky et al. (2015) argues that diseases and molecular methods often leave chemical traces, enabling chemical relationships to approximate biomedical knowledge growth.
- The motif states the representativeness assumption behind chemical-network inference.

## Caveats

- Disease-centered, clinical, methodological, or nonmolecular discoveries may be underrepresented.
- Chemical trace quality depends on MEDLINE indexing and annotation practices.

## Links

- [Biomedical chemical-relationship network panel](../datasets/biomedical_chemical_relationship_network_panel.md)
- [Chemical relationship knowledge network](../representations/chemical_relationship_knowledge_network.md)
- [MEDLINE chemical annotation corpus](../datasets/medline_chemical_annotation_corpus.md)
- [Work-centered scholarly entity model](../representations/work_centered_scholarly_entity_model.md)
- [PubMed-indexed RCR eligibility boundary](../datasets/pubmed_indexed_rcr_eligibility_boundary.md)
- [Biomedicine exclusion representativeness bias](biomedicine_exclusion_representativeness_bias.md)

## References

- Rzhetsky, A., Foster, J. G., Foster, I. T., & Evans, J. A. (2015). Choosing experiments to accelerate collective discovery. *Proceedings of the National Academy of Sciences*, 112(47), 14569-14574. https://doi.org/10.1073/pnas.1509757112 [OpenAlex: W2130145803; Dimensions: pub.1026242168; SciSciNet: W2130145803; WoS: unknown]

## Metadata

- Concept ID: `biomedical_chemical_trace_proxy`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Rzhetsky et al. (2015) (2015)
- Latest seen paper: Rzhetsky et al. (2015) (2015)
- Primary reference DOI: `10.1073/pnas.1509757112`
- OpenAlex ID: `W2130145803`
- Dimensions ID: `pub.1026242168`
- SciSciNet ID: `W2130145803`
- Aliases: chemical trace of biomedicine; molecule-centered biomedical proxy; chemical annotation discovery substrate
