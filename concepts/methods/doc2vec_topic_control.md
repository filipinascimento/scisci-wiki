# Doc2vec topic-control robustness

## Summary

Doc2vec topic-control robustness uses document embeddings from titles and abstracts as flexible topic controls in regressions that test science-of-science mechanisms.

## Canonical Form

- Unit of analysis: paper, title, abstract, embedding vector, topic control, or regression covariate.
- Typical representation: dense document vectors included alongside field, year, journal, and author controls.
- Method target: reduce confounding by fine-grained research content when testing an organizational or network mechanism.
- Empirical signature: the focal association remains after replacing or supplementing coarse field categories with text-derived document vectors.

## Uses in Science of Science

- Extends [topic models](topic_models.md) and [title-abstract paper embeddings](../representations/title_abstract_paper_embeddings.md) into a robustness-control role.
- Helps test whether [team size and disruption](../mechanisms/team_size_disruption.md) reflects team organization rather than teams choosing different topics.
- Provides a reusable pattern for content controls in bibliometric regressions.

## Operationalization

- Train Doc2vec or a comparable document-embedding model on titles and abstracts.
- Use a fixed-dimensional document vector as a topic or content control.
- Include vectors or reduced components in models of disruption, citation impact, collaboration, or funding outcomes.
- Compare results with field/year controls and with within-author or within-journal specifications.

## Evidence and Validations

- Verified full-text evidence from Wu et al. (2019) trains Doc2vec models on title and abstract text.
- The paper constructs 100-dimensional topic vectors and uses them as alternative topic controls.
- The team-size disruption result persists under this content-control robustness test.

## Caveats

- Embedding controls can absorb meaningful mechanism variation if team size changes the content itself.
- Doc2vec quality depends on corpus size, preprocessing, and title/abstract availability.
- Dense vectors are less interpretable than explicit field or topic labels.

## Links

- [topic models](topic_models.md)
- [title-abstract paper embeddings](../representations/title_abstract_paper_embeddings.md)
- [team size and disruption](../mechanisms/team_size_disruption.md)
- [within-author team-size disruption test](../validations/within_author_team_size_disruption_test.md)
- [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md)

## References

- Wu, L., Wang, D., & Evans, J. A. (2019). Large teams develop and small teams disrupt science and technology. *Nature*, 566, 378-382. https://doi.org/10.1038/s41586-019-0941-9 [OpenAlex: W2913773162; Dimensions: pub.1112085796; SciSciNet: W2913773162; WoS: unknown]

## Metadata

- Concept ID: `doc2vec_topic_control`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wu et al. (2019) (2019)
- Latest seen paper: Wu et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41586-019-0941-9`
- OpenAlex ID: `W2913773162`
- Dimensions ID: `pub.1112085796`
- SciSciNet ID: `W2913773162`
- Aliases: document-vector topic control; title-abstract Doc2vec control; embedding-based topic robustness; dense topic covariates
