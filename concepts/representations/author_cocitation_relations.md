# Author Co-Citation Relations

## Summary

Author co-citation relations connect authors when their works are cited together in the same literature, creating an author-level intellectual association distinct from coauthorship.

## Canonical Form

- Unit of analysis: author pair, citing document, cited work set, field, or time window.
- Typical representation: author-author co-citation graph or weighted co-citation matrix.
- Representation target: intellectual relatedness or perceived association among authors.
- Empirical signature: authors become linked when later papers cite their works together.

## Uses in Science of Science

- Provides an author-level contrast to [coauthorship networks](coauthorship_networks.md).
- Extends [co-citation](co_citation.md) from documents to author relations.
- Connects [citation networks](citation_networks.md) to intellectual community mapping.

## Operationalization

- Resolve cited works to authors.
- Count how often author pairs are co-cited within the same citing documents.
- Normalize by author output, citation volume, or field where needed.
- Compare author co-citation graphs with coauthorship graphs to distinguish social collaboration from intellectual association.

## Evidence and Validations

- Verified full-text evidence from Newman (2001) distinguishes coauthorship patterns from cocitation patterns.
- The paper describes cocitation as connections between authors established through citation of their works in the same literature.
- This makes author co-citation a contrasting representation for author relations, rather than a direct social tie.

## Caveats

- Author co-citation can reflect field size, fame, review articles, or shared topic rather than direct interaction.
- Name disambiguation affects both cited and citing author layers.
- Co-citation is directional only through the citing document; the projected author relation is usually undirected.

## Links

- [co-citation](co_citation.md)
- [coauthorship networks](coauthorship_networks.md)
- [bibliographic coupling](bibliographic_coupling.md)
- [citation networks](citation_networks.md)
- [specialty co-citation mapping](../methods/specialty_co_citation_mapping.md)

## References

- Newman, M. E. J. (2001). The structure of scientific collaboration networks. *Proceedings of the National Academy of Sciences*, 98(2), 404-409. https://doi.org/10.1073/pnas.98.2.404 [OpenAlex: W2125315567; Dimensions: pub.1018280471; SciSciNet: W2125315567; WoS: unknown]

## Metadata

- Concept ID: `author_cocitation_relations`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Newman (2001) (2001)
- Latest seen paper: Newman (2001) (2001)
- Primary reference DOI: `10.1073/pnas.98.2.404`
- OpenAlex ID: `W2125315567`
- Dimensions ID: `pub.1018280471`
- SciSciNet ID: `W2125315567`
- Aliases: author co-citation graph; co-cited author relations; author-level cocitation; intellectual author association graph
